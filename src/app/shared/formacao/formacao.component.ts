import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.css']
})
export class FormacaoComponent {
  @Input() uni = '';
  @Input() curso = '';
  @Input() ano = '';
}
