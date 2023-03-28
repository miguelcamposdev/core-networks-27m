import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '02_angular_bootstrap';
  isLightMode = true;

  changeMode(isLight: boolean) {
    this.isLightMode = isLight;
  }
}
