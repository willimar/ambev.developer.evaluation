import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MenuHeaderItem } from "../../abstracts/interfaces/menu-header-item";
import { Enviroment } from "../../abstracts/enviroment";

@Component({
    selector: 'app-header-menu',
    templateUrl: 'header-menu.component.html',
    styleUrls: ['header-menu.component.css'],
  })
  export class HeaderMenuComponent {
    protected menuItens: MenuHeaderItem[] = [];
  
    constructor(
      private _router: Router) {
    }
  
    readJsonFile() {
      
    }
  
    openLink(event: MouseEvent, newRoute: string): void {
      
      event.preventDefault();
  
      if(newRoute == 'about') {
        this._router.navigate([`/about`]);
      } else if(newRoute == 'login') {
        this._router.navigate([`/login`]);
      } else if(newRoute == 'logout') {
        Enviroment.token = '';
        this._router.navigate([`/`]);
      } else if(newRoute == 'add-account') {
        Enviroment.token = '';
        this._router.navigate([`/add-account`]);
      }
      else {
        
      }
    }

    isAuthenticated() {
      return Enviroment.isAuthenticaded();
    }
  }