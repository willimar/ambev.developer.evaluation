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

    constructor(private fb: FormBuilder, private http: HttpClient) {
        this.form = this.fb.group({
          customerName: ['', Validators.required],
          cpfCnpjCustomer: ['', Validators.required],
          companyName: ['', Validators.required],
          userName: ['', [Validators.required, ]]
        });

        console.log('Formulário de Usuário:', this.form);
    }

    ngOnInit(): void {
        
    }

    onSubmit() {
        if (this.form.valid) {
            const formData = this.form.value;
            var apiUrl = `${Enviroment.api}Sale`; 

            const headers = new HttpHeaders({
              Authorization: `Bearer ${Enviroment.token}`, 
            });

            this.http.post(apiUrl, formData, {headers}).subscribe(
                (response) => {
                  console.log('Sucesso:', response); // Resposta da API
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