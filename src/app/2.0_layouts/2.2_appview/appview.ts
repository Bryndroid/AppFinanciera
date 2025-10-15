import { Component, AfterViewInit } from '@angular/core';

import {Router, RouterOutlet } from "@angular/router";
import { LucideAngularModule,  FileIcon  } from 'lucide-angular';
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables);
@Component({
  selector: 'app-appview',
  imports: [RouterOutlet,
    LucideAngularModule
  ],
  templateUrl: './appview.html',
  styleUrl: './appview.css'
})
export class Appview  implements AfterViewInit{
   readonly FileIcon = FileIcon;
   public banderaApp: boolean = false;
   public idTimeout: any;
   constructor(private route: Router){

   }
   ngAfterViewInit(): void {
     this.idTimeout = setTimeout(()=>{
      this.banderaApp = true;
      clearTimeout(this.idTimeout);
     }, 1500)
   }
   navegarRegistro(){
    this.route.navigateByUrl("/Registro")
  }
  navegarLogin(){
    this.route.navigateByUrl("/Inicio-sesion")
  }
}
