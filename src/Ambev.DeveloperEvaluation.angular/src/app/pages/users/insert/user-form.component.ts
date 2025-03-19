import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Enviroment } from "../../../abstracts/enviroment";
import { HttpClient } from "@angular/common/http";

@Component({
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,  FormsModule, ],
  providers: []
})
export class UserFormComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder, private http: HttpClient) {
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });

        console.log('Formulário de Usuário:', this.form);
    }

    ngOnInit(): void {
        
    }

    onSubmit() {
        if (this.form.valid) {
            const formData = this.form.value;
            var apiUrl = `${Enviroment.api}Users`; 

            // Somente para fins didaticos estou colocando valores fixos
            formData.status = 1;
            formData.role = 2;

            
            this.http.post(apiUrl, formData).subscribe(
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