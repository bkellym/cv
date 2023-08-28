import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pillar',
  templateUrl: './pillar.component.html',
  styleUrls: ['./pillar.component.css']
})
export class PillarComponent {
  @Input() title = '';
}
