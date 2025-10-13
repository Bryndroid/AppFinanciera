import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import{ FormsModule,  ReactiveFormsModule, Validators} from "@angular/forms"
@Component({
  selector: 'app-loginform',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './loginform.html',
  styleUrl: './loginform.css'
})
export class Loginform implements OnInit{
  public formulario!: FormGroup;
  public hide = false;
  constructor(private fb: FormBuilder, private ngTip: ChangeDetectorRef){

  }
  ngOnInit(): void {
    this.formulario = this.fb.group({
      correo: ["",[Validators.required, Validators.email]],
      contra: ["", [Validators.required]]
    })
  }

  onSubmit(){
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      this.ngTip.detectChanges();
      return
    }
    this.contraIgual(this.formulario.get("correo")?.value);
  }

  boolean(){
    this.hide = !this.hide
  }

  CampoValido( nombre:string): Boolean{
      //Obtengo el form control
      const validator =  this.formulario.get(nombre);
      if(validator != null){
        if(validator.invalid == true ){
          return false
        }else if(validator.valid == true){
          return true
        }
      }
      return true
  }
  contraIgual(correo: string) {
  const contraStr = localStorage.getItem(correo);

  if (contraStr) {
    // Parseamos y le decimos a TypeScript que es un objeto Usuario
    const contraObj: Usuario = JSON.parse(contraStr);

    if (contraObj.contraseña === this.formulario.get("contra")?.value) {
      console.log("Contraseña correcta");
    } else {
      console.log("Contraseña incorrecta");
    }
  }
} 
}
