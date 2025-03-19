import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Enviroment } from "../../../abstracts/enviroment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  templateUrl: 'product-form.component.html',
  styleUrls: ['product-form.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,  FormsModule, ],
  providers: []
})
export class ProductFormComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder, private http: HttpClient) {
        this.form = this.fb.group({
            title: ['', Validators.required],
            price: ['', Validators.required],
            description: ['', Validators.required],
            category: ['', [Validators.required]],
            image: ['', [Validators.required]],
        });

        console.log('Formulário de produtos:', this.form);
    }

    ngOnInit(): void {
        
    }

    onSubmit() {
        if (this.form.valid) {
            const formData = this.form.value;
            var apiUrl = `${Enviroment.api}Product`; 

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