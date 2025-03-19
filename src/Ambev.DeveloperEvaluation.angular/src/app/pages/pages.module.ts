import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material.modules";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations: [
        AboutComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        AboutComponent,
    ],
    providers: [
      
    ],
    bootstrap: []
  })
  export class PagesModule { }