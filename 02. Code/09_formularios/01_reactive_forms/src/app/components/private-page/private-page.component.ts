import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.css']
})
export class PrivatePageComponent {
  code = new FormControl('');

  constructor(private router: Router) { }

  resetForm() {
    this.code.setValue('');
  }

  sendForm() {
    if(this.code.value == '123456') {
      this.router.navigate(['/secret']);
    } else {
      alert('Wrong code!');
    }
  }
}
