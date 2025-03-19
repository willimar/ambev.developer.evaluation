import { PLATFORM_ID, Inject, Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TemplateModule } from './template/template.module';
import { MaterialModule } from './material.modules';
import { Enviroment } from './abstracts/enviroment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TemplateModule, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ambev.DeveloperEvaluation.angular';
  protected _visible: boolean = true;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    
  }



  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
  
  }

  protected getColumnWith(): string {
    let columnWidth: number = 1;
    let multiplicador: number = 1;
    let screenWidth = window.innerWidth;

    const defaultWidth = 15;

    multiplicador = (screenWidth / 2000) * defaultWidth;

    columnWidth = defaultWidth + multiplicador;

    return `${columnWidth}%`;
  }

  protected onVisibilityChange(): void {
    this._visible = !this._visible;
  }

  getSize(): string {
    let screenHeight: string = '';

    if (isPlatformBrowser(this.platformId)) {
      screenHeight = `${window.innerHeight - 135}px`;
    }

    return screenHeight;
  }

  open(drawer: any): boolean {
    drawer.toggle();
    return true;
  }

  isAuthenticated() {
    return Enviroment.isAuthenticaded();
  }
}
