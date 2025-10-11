import { Component } from '@angular/core';
import { Loginform } from '../../5.0_shared/5.3_loginform/loginform';

@Component({
  selector: 'app-login',
  imports: [Loginform],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
//Acá voy a mandar el form y generar una llamada  a la API

export class Login {

}
