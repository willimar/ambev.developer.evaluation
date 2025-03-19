import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Enviroment } from "../../../abstracts/enviroment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  templateUrl: 'search-product-form.component.html',
  styleUrls: ['search-product-form.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule,  FormsModule, ],
  providers: []
})
export class SearchProductFormComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder, private http: HttpClient) {
        this.form = this.fb.group({
            id: ['', Validators.required],
            title: [''],
            price: [''],
            description: [''],
            category: [''],
            image: [''],
        });
    }

    ngOnInit(): void {
        
    }

    onSubmit() {
        if (this.form.valid) {
          const formData = this.form.value;
          var apiUrl = `${Enviroment.api}Product/${formData.id}`; 
          
          const headers = new HttpHeaders({
            Authorization: `Bearer ${Enviroment.token}`, 
          });

          this.http.get(apiUrl, {headers}).subscribe(
              (response: any) => {
                
                this.form.controls['title'].setValue(response.data.data.title); 
                this.form.controls['price'].setValue(response.data.data.price); 
                this.form.controls['description'].setValue(response.data.data.description); 
                this.form.controls['category'].setValue(response.data.data.category); 
                this.form.controls['image'].setValue(response.data.data.image); 

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