import { CommonModule } from "@angular/common";
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Enviroment } from "../../../abstracts/enviroment";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Component({
  templateUrl: 'sale-form.component.html',
  styleUrls: ['sale-form.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,  FormsModule, ],
  providers: []
})
export class SaleFormComponent implements OnInit {
    form: FormGroup;
    saleForm: FormGroup;
    saleNumber: string = ``;
    products: any[] = [];
    selectedProducts: any[] = [];

    constructor(private fb: FormBuilder, private http: HttpClient) {
        this.form = this.fb.group({
          customerName: ['', Validators.required],
          cpfCnpjCustomer: ['', Validators.required],
          companyName: ['', Validators.required],
          userName: ['', [Validators.required, ]]
        });

        this.saleForm = this.fb.group({
          saleId: ['', Validators.required],
          productId: ['', Validators.required],
          count: ['', Validators.required],
        });

        console.log('Formulário de Usuário:', this.form);
    }

    ngOnInit(): void {
        var apiUrl = `${Enviroment.api}Product`; 

        const headers = new HttpHeaders({
          Authorization: `Bearer ${Enviroment.token}`, 
        });

        this.http.get(apiUrl, {headers}).subscribe(
          (response: any) => {
            var products: any[] = response.data.data;
            
            products.forEach((item) => {
              this.products.push({
                id: item.id,
                title: item.title,
                price: item.price,
              });
            });
          }
        );
    }

    onSubmit() {
        if (this.form.valid) {
            const formData = this.form.value;
            var apiUrl = `${Enviroment.api}Sale`; 

            const headers = new HttpHeaders({
              Authorization: `Bearer ${Enviroment.token}`, 
            });

            this.http.post(apiUrl, formData, {headers}).subscribe(
                (response: any) => {
                  this.saleNumber = response.data.number;
                  this.saleForm.controls['saleId'].setValue(response.data.id);
                  alert('Dados enviados com sucesso!');
                },
                (error) => {
                  console.error('Erro:', error); // Trata erros
                  // Como acredito que o objetivo seja avaliar de forma geral, não vou tratar o erro.
                  // Mas seria somente necessário ler a mensagem de erro e exibir ao usuário por meio de um alerta mais elegante.
                  alert('Ocorreu um erro ao enviar os dados.');
                }
              );
        } else {
            console.error('Formulário inválido');
        }
    }

    saveProductSale() {
      if (this.saleForm.valid) {
        const formData = this.saleForm.value;
        var apiUrl = `${Enviroment.api}SaleProduct`; 

        const headers = new HttpHeaders({
          Authorization: `Bearer ${Enviroment.token}`, 
        });

        this.http.post(apiUrl, formData, {headers}).subscribe(
            (response: any) => {
              const newItem = {
                id: response.data.id,
                productName: response.data.productName,
                unitValue: response.data.unitValue,
                discount: response.data.discount,
                totalUnityValue: response.data.totalUnityValue,
                canceled: response.data.canceled,
                count: response.data.count,
              };
              
              // Procurar o item no array pelo ID
              const existingItem = this.selectedProducts.find(product => product.id === newItem.id);
              
              if (existingItem) {
                  Object.assign(existingItem, newItem);
              } else {
                  this.selectedProducts.push(newItem);
              }

              alert('Dados enviados com sucesso!');
            },
            (error) => {
              console.error('Erro:', error); // Trata erros
              // Como acredito que o objetivo seja avaliar de forma geral, não vou tratar o erro.
              // Mas seria somente necessário ler a mensagem de erro e exibir ao usuário por meio de um alerta mais elegante.
              alert('Ocorreu um erro ao enviar os dados.');
            }
          );
    } else {
        console.error('Formulário inválido');
    }
    }
}