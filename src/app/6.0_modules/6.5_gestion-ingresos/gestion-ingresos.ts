import { Component,AfterViewInit,OnInit,viewChild, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import { Chart, registerables } from 'chart.js'
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { datosService } from '../../4.0_services/datoEstado.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
//Para forms

import { FormGroup, FormBuilder, Form } from '@angular/forms';

import{ FormsModule,  ReactiveFormsModule, Validators} from "@angular/forms"

Chart.register(...registerables);

@Component({
  selector: 'app-gestion-ingresos',
  imports: [MatTabsModule, MatPaginatorModule,MatSortModule, MatTableModule, MatExpansionModule,MatDividerModule, FormsModule, ReactiveFormsModule],
  templateUrl: './gestion-ingresos.html',
  styleUrl: './gestion-ingresos.css'
})
export class GestionIngresos implements AfterViewInit, OnInit{
  //Formulario
  public formulario!: FormGroup;
  public banderaCuentaTiene: boolean =  false;
  placeholderTransacciones = [{}];
  placeholderTransRadar!:AgrupacionDias[];
  public banderaMostar = false;
  public canal: any;
  public canal2: any;
  polarChart!: Chart;
  lineChart!: Chart;
  //Variables concatenadoras
  public transaccionesResumen: any;
  public transaccionesFrecuencia: any;
  public patronesDebito: any;
  public patronesCredito: any;
  public canalesUso: any;
  public tendenciaSaldo:any;
  public banderaPorcentaje:any;
  public flujoSaldo: any;
  private banderaAyudante: number = 0;
  private banderaCantidad: number = 0;
  private banderaAcumuladora: number = 0;
  public banderaPromedioGasto: string = "";
  public banderaDias: number = 0;
   isModalOpen = false;
  public banderaOtros: boolean = false;
  public banderaOtros1:boolean = false;
  public arrayAuxiliar: any;
  public arrayAuxiliar1: any;
  constructor(private datos: datosService, private fb: FormBuilder, private cd: ChangeDetectorRef){

  }
  ngOnInit(): void {
    this.iniciarFormulario();
    this.comparadorEconomico();
    //Transacciones
    this.placeholderTransacciones = this.datos.transaccionesCuenta()
    this.placeholderTransRadar  = this.datos.transaccionesCategoriasGrafica();
    //Variables para Polar Chart
    const vectorAux = this.placeholderTransRadar.map(item => item.tipo);
    const data = this.placeholderTransRadar.map(item => { return item.costos});
    //Para KPI de tendencia de deuda
    this.placeholderTransRadar.map((item)=>{
       if(item.costos >= this.banderaAyudante){
          this.flujoSaldo = {
            categoria: item.tipo,
            costo: item.costos
          }
        this.banderaAyudante = item.costos;
       }
       //Para saber el porcentaje de gasto en cada compra, (SIN CONTEMPLAR PAGOS)
        if(item.tipo != "pagos"){
          this.banderaCantidad =  item.costos + this.banderaCantidad;
          this.banderaAcumuladora++;
        }
    })
    this.banderaPromedioGasto = (this.banderaCantidad/this.banderaAcumuladora).toFixed(2);
    //--Tiempo en que se le va el creditos
    this.diasCredito();
    this.crearPolarChart(vectorAux,data); 
  }
  iniciarFormulario(){
    this.formulario = this.fb.group({
      selectCargo: ["",[Validators.required]],
      inputMonto:[0,[Validators.required, Validators.min(0)]],
      inputCategoria: ["", [Validators.required]],
      inputCanal: ["", [Validators.required]],
      dateFecha: ["", [Validators.required]],
      inputDetalle: ["" ]
    })
  }
  ngAfterViewInit(): void {
    
    
  }
  //Función que me manda a llamar las funciones que tiene mi servicio datos para sacar metricas y conclusiones
  comparadorEconomico(){
   this.transaccionesResumen = this.datos.obtenerResumen();
   this.transaccionesFrecuencia = this.datos.obtenerFrecuencia();
   this.patronesCredito = this.datos.obtenerPatronAbonos();
   this.patronesDebito = this.datos.obtenerPatronCargos();
   this.canalesUso = this.datos.obtenerCanalesUso();
   this.tendenciaSaldo =  this.datos.obtenerTendenciaSaldo();
   //Obtengo las categorias
   this.arrayAuxiliar =  Object.keys(this.canalesUso);
   //---Llamar KPIs
   this.banderaPorcentaje = ((this.tendenciaSaldo.saldoFinal / this.tendenciaSaldo.saldoLimite)*100).toFixed(2)
  }
  diasCredito(){
    let contador = parseInt(this.banderaPromedioGasto);
    let saldoActual = parseInt(this.tendenciaSaldo.saldoFinal);
    do{

      if(saldoActual<=this.tendenciaSaldo.saldoLimite){
        this.banderaDias++;
      }
      saldoActual = saldoActual + contador;
    }while(saldoActual<=this.tendenciaSaldo.saldoLimite)
  }
  mostrarDatosCuenta(){
    this.banderaMostar = !this.banderaMostar;
  }

  crearPolarChart(labelsOwo:any,dataset:any) {
    const data = {
    labels: labelsOwo,
    datasets: [{
    label: 'Costo total',
    data: dataset,
    backgroundColor: [
      'rgba(255, 99, 133, 0.62)',
      'rgb(75, 192, 192, 0.62)',
      'rgb(255, 205, 86, 0.62)',
      'rgb(201, 203, 207, 0.62)',
      'rgb(54, 162, 235,0.62)',
      'rgba(96, 12, 145, 0.62)',
      'rgba(241, 147, 6, 0.62)',
      'rgba(14, 238, 6, 0.62)'
      ]
    }]
  };

  this.polarChart = new Chart("graficaRadar", {
      type: 'polarArea',
      data: data,
      options: {
        
      maintainAspectRatio: false,
      layout: {
        padding: 20
      },
      scales: {
    r: {
      angleLines: {
        color: 'rgba(121, 11, 224, 0.96)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.51)'
      },
      pointLabels: {
        color: '#ffffff',
        font: {
          size: 55
        }
      },
      ticks: {
        color: '#ffffff',
        backdropColor: 'transparent',
        font: {
          size: 14
        },
        stepSize: 200
      }
    }
  },
  plugins: {
    legend: {
      position: 'right',
      labels: {
        color: '#ffffff',
        font: {
          size: 15,
          weight: 'bold'
        },
        padding: 20,
        boxWidth: 20
      }
    },
    title: {
      display: true,
      text: 'Distribución de Movimiento de Dinero',
      color: '#f1f1f1ff',
      font: {
        size: 20,
        weight: 'bold',
        family: 'Segoe UI, sans-serif'
      }
    },
    tooltip: {
      enabled: true,
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleFont: { size: 16, weight: 'bold' },
      bodyFont: { size: 14 },
      padding: 12,
      cornerRadius: 8,
      callbacks: {
        label: function(context) {
          return `${context.label}: $${context.formattedValue}`;
        }
      }
    }
  },
  animation: {
    animateRotate: true,
    animateScale: true
  }
      }
    });
  }
  transformarCanales(canales: { [key: string]: { cantidad: number; montoTotal: number } }) {
    return Object.entries(canales).map(([canal, valores]) => ({
      canal,
      ...valores
    }));
  }
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  cambiarOtro(){
    this.banderaOtros = true;
    
    
  }
  onSubmit(){
    
    if(this.formulario.invalid){
      alert("Complete correctamente el formulario")
      return;
    }
    const transaccionNueva: Transaccion = {
      fecha: this.formulario.get("dateFecha")?.value,
      descripcion:  this.formulario.get("inputCategoria")?.value,
      tipo: this.formulario.get("selectCargo")?.value,
      monto: this.formulario.get("inputMonto")?.value,
      balance: this.tendenciaSaldo.saldoFinal,
      referencia: this.formulario.get("inputDetalle")?.value,
      canal: this.formulario.get("inputCanal")?.value
    }
    this.datos.cambiarDatos(transaccionNueva);
    //---todo de nuevo por que cambie datos xd
    this.comparadorEconomico();
    //Transacciones
    this.placeholderTransacciones = this.datos.transaccionesCuenta()
    this.placeholderTransRadar  = this.datos.transaccionesCategoriasGrafica();
    //Variables para Polar Chart
    const vectorAux = this.placeholderTransRadar.map(item => item.tipo);
    const data = this.placeholderTransRadar.map(item => { return item.costos});
    //Para KPI de tendencia de deuda
    this.placeholderTransRadar.map((item)=>{
       if(item.costos >= this.banderaAyudante){
          this.flujoSaldo = {
            categoria: item.tipo,
            costo: item.costos
          }
        this.banderaAyudante = item.costos;
       }
       //Para saber el porcentaje de gasto en cada compra, (SIN CONTEMPLAR PAGOS)
        if(item.tipo != "pagos"){
          this.banderaCantidad =  item.costos + this.banderaCantidad;
          this.banderaAcumuladora++;
        }
    })
    this.banderaPromedioGasto = (this.banderaCantidad/this.banderaAcumuladora).toFixed(2);
    //--Tiempo en que se le va el creditos
    this.diasCredito();
    this.updateChart(vectorAux,data);
    this.cd.detectChanges();
  }
  updateChart(labelsOwo:any,dataset:any){
    this.polarChart.data.labels = labelsOwo;
    this.polarChart.data.datasets[0].data = dataset;
    this.polarChart.update(); // esto refresca la gráfica con los nuevos datos
  }
}
