import { NgModule } from "@angular/core";
import { MaterialModule } from "../material.modules";
import { HeaderComponent } from "./header.component/header.component";
import { HeaderMenuComponent } from "./header.component/header-menu.component";
import { FooterComponent } from "./footer.component/footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MainMenuComponent } from "./main-menu.component/main-menu.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
      HeaderComponent,
      HeaderMenuComponent,
      FooterComponent,
      MainMenuComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
    ],
    exports: [
        HeaderComponent,
        HeaderMenuComponent,
        FooterComponent,
        MainMenuComponent
    ],
    providers: [
      
    ],
    bootstrap: []
  })
  export class TemplateModule { }