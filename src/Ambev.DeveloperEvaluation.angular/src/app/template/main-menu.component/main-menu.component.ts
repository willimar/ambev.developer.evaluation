import {Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { RootMenu } from '../../abstracts/interfaces/root-menu';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  protected _visibleMenu: boolean = true;

  @Output() visibilityChange = new EventEmitter<boolean>();
  protected menu: RootMenu[] = [
    {
      classImage: 'fa-brands fa-product-hunt',
      caption: 'Produtos',
      router: null,
      showSubItems: false,
      children: [
        {
          classImage: 'fa-solid fa-file-circle-plus',
          caption: 'Inserir produto...',
          router: 'add-product',
          showSubItems: false,
          children: []
        },
        {
          classImage: 'fa-solid fa-filter',
          caption: 'Consultar produtos...',
          router: 'get-product',
          showSubItems: false,
          children: []
        },
        {
          classImage: 'fa-solid fa-file-circle-minus',
          caption: 'Excluir produtos...',
          router: 'delete-product',
          showSubItems: false,
          children: []
        }
      ]
    },
    {
      classImage: 'fa-solid fa-cart-plus',
      caption: 'Vendas',
      router: null,
      showSubItems: false,
      children: [
        {
          classImage: 'fa-solid fa-file-circle-plus',
          caption: 'Vender...',
          router: 'add-product',
          showSubItems: false,
          children: []
        },
        {
          classImage: 'fa-solid fa-filter',
          caption: 'Consultar vendas...',
          router: 'get-product',
          showSubItems: false,
          children: []
        },
        {
          classImage: 'fa-solid fa-file-circle-minus',
          caption: 'Excluir venda...',
          router: 'delete-product',
          showSubItems: false,
          children: []
        }
      ]
    },    
    {
      classImage: 'fa-solid fa-users',
      caption: 'Usuários',
      router: null,
      showSubItems: false,
      children: [
        {
          classImage: 'fa-solid fa-file-circle-plus',
          caption: 'Inserir usuário...',
          router: 'add-user',
          showSubItems: false,
          children: []
        },
        {
          classImage: 'fa-solid fa-filter',
          caption: 'Consultar usuários...',
          router: 'get-user',
          showSubItems: false,
          children: []
        },
        {
          classImage: 'fa-solid fa-file-circle-minus',
          caption: 'Excluir usuários...',
          router: 'get-user',
          showSubItems: false,
          children: []
        }
      ]
    },
  ];

  constructor() {
      
  }

  ngOnInit(): void {
    
  }

  toggleSubItems(item: RootMenu): void {
    item.showSubItems = !item.showSubItems;
  }

  toggleMenu(): void {
    this._visibleMenu = !this._visibleMenu;
    this.visibilityChange.emit(this._visibleMenu);
  }

  protected getMenu(): RootMenu[] {
    return this.menu;
  }
}
