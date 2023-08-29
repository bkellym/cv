import { Component, Inject } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portifolio';

  constructor(@Inject(APP_BASE_HREF) public  baseHref: string) {
    console.log(`APP_BASE_HREF is ${this.baseHref}`);
  }
}
