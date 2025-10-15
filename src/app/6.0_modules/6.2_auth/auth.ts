import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import{ FormsModule,  ReactiveFormsModule, Validators} from "@angular/forms"
@Component({
  selector: 'app-auth',
  imports: [MatFormFieldModule,MatInputModule,MatSelectModule,MatDatepickerModule,MatRadioModule, MatButtonModule, MatCheckboxModule
    ,FormsModule,ReactiveFormsModule, CommonModule, MatIconModule
  ],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth implements OnInit {
  public formulario!: FormGroup;
  public bandera: boolean = false;
  public cargando:boolean = false;
  constructor(private fb: FormBuilder, private ngTip: ChangeDetectorRef, private route: Router){

  }

  ngOnInit(): void {
    this.formulario =  this.fb.group({
      nombreCompleto:["",[Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/), Validators.maxLength(50), Validators.minLength(10)]],
      fechaNacimiento: ["", [Validators.required]],
      correo: ["", [Validators.required, Validators.email]],
      contraseña: ["", [Validators.required, Validators.minLength(5)]],
      contraseñaConfirm: ["", [Validators.required, Validators.minLength(5)]],
      Terminos: [false,[Validators.requiredTrue]],
      Privacidad: [false,[Validators.requiredTrue]]
    })
  }

  onSubmit(){
    if (this.formulario.invalid == true || this.contraValidator("contraseña",       "contraseñaConfirm") == false) {
        this.formulario.markAllAsTouched();
        this.ngTip.detectChanges();
        this.bandera  = !this.bandera;
        return;
    }else{
      const edad =  this.calcularEdad(this.formulario.get("fechaNacimiento")?.value);
      const objStr = {
        nombreUsuario: this.formulario.get("nombreCompleto")?.value,
        edadUsuario: edad,
        correoUsuario: this.formulario.get("correo")?.value,
        contraseña: this.formulario.get("contraseña")?.value,
        checklist: true,
        usuarioTrue: "Autorizado",

      }
      let tiemout = setTimeout(()=>{
        this.cargando = true;
        localStorage.setItem(this.formulario.get("correo")?.value, JSON.stringify(objStr));
        this.route.navigate(['/Inicio-sesion']);
        clearTimeout(tiemout);
      },1040)
    }
  }
  calcularEdad(fechaNacimiento: Date): number {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
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
  contraValidator(contra: string, confirm: string): Boolean{
    //Obtengo el nombre del controlador y obtengo el controlador en si
    if(this.formulario.get(contra)?.value !== this.formulario.get(confirm)?.value){
      alert("Las contraseñas no son iguales")
      return false
    }
    return true
  }

  hide = true;
  boolean() {
    this.hide = !this.hide
  }
    hide2 = true;
  boolean2() {
    this.hide2 = !this.hide2
  }

  navegarLogin(){
    this.route.navigateByUrl("/Inicio-sesion")
  }
}
