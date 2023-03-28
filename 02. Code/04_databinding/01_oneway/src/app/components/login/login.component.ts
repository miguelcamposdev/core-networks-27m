import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'Bienvenido a la aplicación de login';
  isImg1 = true;
  imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';
  imgUrl2 = 'https://ih1.redbubble.net/image.830028208.7543/st,small,507x507-pad,600x600,f8f8f8.u2.jpg';
  email = '';

  getSlogan() {
    return 'Si programas lento eres mejor programador';
  }

  mostrarMensaje() {
    alert('Hola, este es el mensaje que has solicitado');
  }

  cambiarImagen() {
    this.isImg1 = !this.isImg1;
  }

  doLogin(){
    console.log(this.email);
  }
}
