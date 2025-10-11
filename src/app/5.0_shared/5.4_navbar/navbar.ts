import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { LucideAngularModule,  FileIcon  } from 'lucide-angular';
@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  readonly fileIcon =  FileIcon;

  constructor(private route: Router){

  }
  navegarAhorro(){
    this.route.navigateByUrl("Herramientas-Ahorro");
  }
  navegarInicio(){
    this.route.navigateByUrl("Inicio");
  }

  navegarCuentas(){
    this.route.navigateByUrl("Cuentas-Registro")
  }
  navegarMetas(){
    this.route.navigateByUrl("Metas");
  }
  navegarInversiones(){
    this.route.navigateByUrl("Estado-Financiero");
  }
  navegarGuia(){
    this.route.navigateByUrl("Guia-financiera");
  }
}
