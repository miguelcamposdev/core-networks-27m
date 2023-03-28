import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() titulo = '';
  @Input() contenido = '';
  @Input() buttonText = '';
  @Input() isLight = true;
}
