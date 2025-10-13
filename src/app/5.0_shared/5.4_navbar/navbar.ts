import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { LucideAngularModule,  FileIcon  } from 'lucide-angular';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  readonly fileIcon =  FileIcon;
  public banderaCambio = false;
  public hover = false;
  public banderaNumber:Number = 0;
  constructor(private route: Router){

  }
  toggle(){
    this.banderaCambio = !this.banderaCambio;
  }
  navegarAhorro(numero: Number){
    this.route.navigateByUrl("Herramientas-Ahorro");
    this.banderaNumber = numero;
  }
  navegarInicio(numero: Number){
    this.route.navigateByUrl("Inicio");
    this.banderaNumber = numero;
  }

  navegarCuentas(numero: Number){
    this.route.navigateByUrl("Cuentas-Registro")
    this.banderaNumber = numero;
  }
  navegarMetas(numero: Number){
    this.route.navigateByUrl("Metas");
    this.banderaNumber = numero;
  }
  navegarInversiones(numero: Number){
    this.route.navigateByUrl("Estado-Financiero");
    this.banderaNumber = numero;
  }
  navegarGuia(numero: Number){
    this.route.navigateByUrl("Guia-financiera");
    this.banderaNumber = numero;
  }
}
