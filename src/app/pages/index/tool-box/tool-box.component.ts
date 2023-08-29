import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-tool-box',
  templateUrl: './tool-box.component.html',
  styleUrls: ['./tool-box.component.css']
})
export class ToolBoxComponent {
  constructor(@Inject(APP_BASE_HREF) public  baseHref: string) {
    console.log(`APP_BASE_HREF is ${this.baseHref}`);
  }
}
