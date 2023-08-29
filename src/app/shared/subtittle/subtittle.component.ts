import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtittle',
  templateUrl: './subtittle.component.html',
  styleUrls: ['./subtittle.component.css']
})
export class SubtittleComponent {
  @Input() text = '';
}
