import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.interface';

const ALUMNOS_LIST: Alumno[] = [
  { nombre: 'Juan', apellidos: 'Pérez', edad: 20, foto: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/7f/7faefdce2930ee7cf4d15c798cf151ff6c6ae6a6.jpg' },
  { nombre: 'Ana', apellidos: 'García', edad: 21, foto: '' },
  { nombre: 'Luis', apellidos: 'González', edad: 22, foto: '' },
  { nombre: 'María', apellidos: 'Martínez', edad: 23, foto: '' },
  { nombre: 'Pedro', apellidos: 'Sánchez', edad: 24, foto: '' },
  { nombre: 'Laura', apellidos: 'López', edad: 25, foto: '' },
  { nombre: 'Antonio', apellidos: 'Rodríguez', edad: 26, foto: '' },
];

@Component({
  selector: 'app-listado-clase',
  templateUrl: './listado-clase.component.html',
  styleUrls: ['./listado-clase.component.css']
})
export class ListadoClaseComponent {
  listadoAlumnos = ALUMNOS_LIST;

  getAlumnoFoto(alumno: Alumno) {
    if(alumno.foto == '') {
      return 'https://thumbs.dreamstime.com/b/account-avatar-user-blue-dotted-line-icon-148775374.jpg';
    } else {
      return alumno.foto;
    }
  }
}
