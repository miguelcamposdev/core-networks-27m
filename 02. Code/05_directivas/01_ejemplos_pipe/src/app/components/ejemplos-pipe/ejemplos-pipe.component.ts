import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplos-pipe',
  templateUrl: './ejemplos-pipe.component.html',
  styleUrls: ['./ejemplos-pipe.component.css']
})
export class EjemplosPipeComponent {
  precioProducto = 100;
  esDeDia = true;

  cambiarDiaNoche() {
    this.esDeDia = !this.esDeDia;
  }
}
