/*import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loginModel } from './Models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {
loginform: loginModel = new loginModel('','','');

  //constructor(private router: Router) {}

  onSubmit() {
    // Aquí iría la lógica de autenticación

    if (this.specialty == 'Administrador') {
      this.router.navigate(['/master-configurations']);
    } else {
      this.router.navigate(['/pneumatic-tube']);
    }
  }
}*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', // Asegúrate de que este archivo exista
  styleUrls: ['./login.component.css'] // Asegúrate de que este archivo exista
})
export class LoginComponent {
  onSubmit() {
    // Aquí iría la lógica de autenticación

   /* if (this.specialty == 'Administrador') {
      this.router.navigate(['/master-configurations']);
    } else {
      this.router.navigate(['/pneumatic-tube']);
    }*/
  }
}

