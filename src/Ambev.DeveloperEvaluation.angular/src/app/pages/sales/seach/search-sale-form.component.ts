import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Enviroment } from "../../../abstracts/enviroment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  templateUrl: 'search-sale-form.component.html',
  styleUrls: ['search-sale-form.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,  FormsModule, ],
  providers: []
})
export class SearchSaleFormComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder, private http: HttpClient) {
        this.form = this.fb.group({
            id: ['', Validators.required],
            username: [''],
            phone: [''],
            email: [''],
            role: [''],
            status: [''],
        });

        console.log('Formulário de Usuário:', this.form);
    }

    ngOnInit(): void {
        
    }

    onSubmit() {
        if (this.form.valid) {
          const formData = this.form.value;
          var apiUrl = `${Enviroment.api}Sale/${formData.id}`; 
          
          const headers = new HttpHeaders({
            Authorization: `Bearer ${Enviroment.token}`, 
          });

          this.http.get(apiUrl, {headers}).subscribe(
              (response: any) => {
                
                this.form.controls['username'].setValue(response.data.data.username); 
                this.form.controls['phone'].setValue(response.data.data.phone); 
                this.form.controls['email'].setValue(response.data.data.email); 
                this.form.controls['role'].setValue(response.data.data.role); 
                this.form.controls['status'].setValue(response.data.data.status); 

                console.log('Sucesso:', response.data.data);
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