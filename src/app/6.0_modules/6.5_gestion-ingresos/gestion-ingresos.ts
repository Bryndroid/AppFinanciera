import { Component,AfterViewInit,OnInit,viewChild, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js'
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { datosService } from '../../4.0_services/datoEstado.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
Chart.register(...registerables);

@Component({
  selector: 'app-gestion-ingresos',
  imports: [MatTabsModule, MatPaginatorModule,MatSortModule, MatTableModule, MatExpansionModule,MatDividerModule],
  templateUrl: './gestion-ingresos.html',
  styleUrl: './gestion-ingresos.css'
})
export class GestionIngresos implements AfterViewInit, OnInit{
  public banderaCuentaTiene: boolean =  false;
  placeholderTransacciones = [{}];
  placeholderTransRadar!:AgrupacionDias[];
  public banderaMostar = false;
  public canal: any;
  polarChart!: Chart;
  lineChart!: Chart;
  //Variables concatenadoras
  public transaccionesResumen: any;
  public transaccionesFrecuencia: any;
  public patronesDebito: any;
  public patronesCredito: any;
  constructor(private datos: datosService){

  }
  ngOnInit(): void {
    this.comparadorEconomico();
  }
  ngAfterViewInit(): void {
    //Transacciones
    this.placeholderTransacciones = this.datos.transaccionesCuenta()
    this.placeholderTransRadar  = this.datos.transaccionesCategoriasGrafica();
    //Variables para Polar Chart
    const vectorAux = this.placeholderTransRadar.map(item => item.tipo);
    const data = this.placeholderTransRadar.map(item => { return item.costos});
    this.crearPolarChart(vectorAux,data); 
    
  }
  comparadorEconomico(){
   this.transaccionesResumen = this.datos.obtenerResumen();
   this.transaccionesFrecuencia = this.datos.obtenerFrecuencia();
   this.patronesCredito = this.datos.obtenerPatronCreditos();
   this.patronesDebito = this.datos.obtenerPatronDebitos();
   console.log(this.patronesCredito);
   console.log(this.patronesDebito);
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
}
