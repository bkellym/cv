import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exp-title',
  templateUrl: './exp-title.component.html',
  styleUrls: ['./exp-title.component.css']
})
export class ExpTitleComponent {
  @Input() text = '';
}
