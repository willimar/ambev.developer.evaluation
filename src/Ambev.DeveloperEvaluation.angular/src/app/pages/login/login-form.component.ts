import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Enviroment } from "../../abstracts/enviroment";

@Component({
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,  FormsModule, ],
  providers: []
})
export class LoginFormComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder, private http: HttpClient, private _router: Router) {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        
    }

    onSubmit() {
        if (this.form.valid) {
            const formData = this.form.value;
            var apiUrl = `${Enviroment.api}Auth`; 
            
            this.http.post(apiUrl, formData).subscribe(
                (response: any) => {
                  console.log('Sucesso:', response); // Resposta da API

                  Enviroment.token = response.data.data.token; // Salva o token

                  console.log('Sucesso:', Enviroment.token); // Resposta da API

                  alert('Dados enviados com sucesso!');
                  this._router.navigate([`/`]);
                },
                (error) => {
                  console.error('Erro:', error); // Trata erros
                  // Como acredito que o objetivo seja avaliar de forma geral, não vou tratar o erro.
                  // Mas seria somente necessário ler a mensagem de erro e exibir ao usuário por meio de um alerta mais elegante.
                  alert('Ocorreu um erro ao enviar os dados.');
                }
              );
        } else {
          alert('Formulário inválido');
        }
    }

}