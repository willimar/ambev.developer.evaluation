import { Component } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { HeaderMenuComponent } from "./header-menu.component";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
  })
  export class HeaderComponent {
    constructor (private _bottomSheet: MatBottomSheet){
  
    }
  
    openBottomSheet(): void {
      this._bottomSheet.open(HeaderMenuComponent);
    }
  }