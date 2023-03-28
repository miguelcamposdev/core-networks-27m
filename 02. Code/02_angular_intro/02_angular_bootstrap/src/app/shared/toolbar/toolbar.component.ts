import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  isLightMode = true;

  changeMode(isLight: boolean) {
    this.isLightMode = isLight;
  }

}
