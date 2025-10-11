import { Component } from '@angular/core';

import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-form-estado',
  imports: [],
  templateUrl: './form-estado.html',
  styleUrl: './form-estado.css'
})
export class FormEstado {
  constructor(private route: Router){
    
  }
  navegarCuentas(){
    this.route.navigateByUrl("Cuentas");
  }
}
