import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { PagesModule } from "../pages.module";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  standalone: true,
  imports: [RouterOutlet, PagesModule]
})
export class HomeComponent implements OnInit {

    ngOnInit(): void {
        
    }

}