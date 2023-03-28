import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  textoEjemplo = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veniam eveniet dignissimos ea perspiciatis illum voluptates. Obcaecati dolore reiciendis, numquam consectetur, officiis possimus, quaerat fugiat vel ab assumenda ipsa. Impedit.';
  @Input() mode = true;
}
