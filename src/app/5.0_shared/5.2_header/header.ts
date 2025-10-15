import { Component, AfterViewInit } from '@angular/core';
import { LucideAngularModule,  FileIcon  } from 'lucide-angular';
import { retry } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements AfterViewInit {
  readonly fileIcon = FileIcon;
  public nombreUsuario:string = "DefaultUser";
  
  ngAfterViewInit(): void {
    const key = sessionStorage.key(0);
    if(key != null){
      let objUsuario = sessionStorage.getItem(key);
      if(objUsuario != null){
        let objeto: Usuario = JSON.parse(objUsuario);
    
        let objetoLocal = localStorage.getItem(objeto.correo); 
      
        if(objetoLocal != null){
          let objetoReal:Usuario = JSON.parse(objetoLocal);
          console.log(objetoReal)
          this.nombreUsuario =  this.obtenerNombre(objetoReal.nombreUsuario);
        }
      }
    }
  }
  obtenerNombre(nombreCompleto: string): string{
    const regExp = /^([A-Za-z]+)/;
    let nombreArray = nombreCompleto.match(regExp);
    if(nombreArray != null){
      return nombreArray[1]
    }else{
      return "DefaultUsers";
    }

  }

}
