import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chart, registerables } from 'chart.js'
import { chartCreate } from '../../4.0_services/crearChart.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
Chart.register(...registerables);
@Component({
  selector: 'app-ahorro-inteligente',
  imports: [ReactiveFormsModule],
  templateUrl: './ahorro-inteligente.html',
  styleUrl: './ahorro-inteligente.css'
})
export class AhorroInteligente implements OnInit, AfterViewInit{
  public banderaPrestamo: boolean = false;
  formulario!: FormGroup;
  public tasaMensual: number = 0;
  public cuotaMensual: string = "";
  public totalPagar: string = "";
  public totalInteres: string = "";
  private contadorA: number = 0;
  public anio: any;
  public mes: any;
  radarChart!: Chart;
  @ViewChild('tablaAmortizacionRef') tablaAmortizacionRef!: ElementRef;
 public tablaAmortizacion: {
    ano: number;
    meses: {
      mes: number;
      cuota: number;
      intereses: number;
      PagoCapital: number;
      SaldoTotal: number;
    }[];
  }[] = [];
  public amortizacionArray = [
    {
        cuota: 0,
        intereses: 0,
        PagoCapital: 0,
        SaldoTotal:0
    }
  ];
  
  constructor(private fb: FormBuilder, private chartCreator: chartCreate){

  }
  ngAfterViewInit(): void {
    this.crearRadarChart();
  }
  //--- GRAFICA---
  crearRadarChart() {

    this.radarChart = new Chart("miCanvita", {
      type: 'radar',
      data: {
        labels: ["Enero", "Febrero", "Junio", "Julio", "Agosto", "Septiembre", "Vaian"],
        datasets: [
          {
            label: 'Comida',
            data: [300, 280, 250, 270, 310, 330, 340, 300, 280, 260, 290, 310],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Trabajo',
            data: [200, 180, 210, 190, 220, 230, 240, 210, 200, 180, 190, 220],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
          },
          {
            label: 'Casa',
            data: [400, 420, 410, 430, 440, 460, 470, 450, 440, 420, 410, 430],
            fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
            pointBackgroundColor: 'rgb(75, 192, 192)',
          },
          {
            label: 'Deudas',
            data: [150, 140, 160, 130, 120, 110, 100, 120, 130, 140, 150, 160],
            fill: true,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgb(255, 206, 86)',
            pointBackgroundColor: 'rgb(255, 206, 86)',
          },
          {
            label: 'Negocio',
            data: [500, 520, 510, 530, 550, 540, 560, 580, 590, 600, 620, 610],
            fill: true,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgb(153, 102, 255)',
            pointBackgroundColor: 'rgb(153, 102, 255)',
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            angleLines: { color: 'rgba(0, 0, 0, 0.93)' },
            grid: { color: 'rgba(8, 250, 0, 1)' },
            suggestedMin: 0,
            suggestedMax: 700,
            ticks: {
              stepSize: 100,
              color: '#333'
            },
            pointLabels: {
              color: '#03ff10ff',
              font: { size: 18 }
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: { color: '#fcfcfcff', font: { size: 16 } }
          },
          tooltip: { enabled: true }
        }
      }
    });
  }
  //-------------
  ngOnInit() {
    this.formulario = this.fb.group({
      Prestamo: ["", [Validators.required, Validators.min(1)]],
      Tasa: ["10", Validators.required],
      Plazo: ["", [Validators.required, Validators.min(1), Validators.max(50)]]
    });

  }
  reiniciarFormulario() {
    this.formulario.reset({
      Prestamo: "",
      Tasa: "",
      Plazo: ""
    });
  }
  calcular(){
    if(this.formulario.invalid == true){
      this.formulario.markAllAsTouched();
      alert("Complete correctamente todos los campos")
    }else{
      this.AEE();
      this.banderaPrestamo = true;
      this.AEETabla(parseFloat(this.cuotaMensual), parseFloat(this.formulario.value.Prestamo));
      this.generarTablaAmortizacion();
    }
  }


  AEE(){
    const tasaForm = parseFloat(this.formulario.value.Tasa);
    const añosForm = parseFloat(this.formulario.value.Plazo);
    const montoForm = parseFloat(this.formulario.value.Prestamo);
    this.tasaMensual  =(tasaForm)/12;
    let totalMeses = (añosForm) * 12;
    let cuotaMensualDecimales = ((montoForm)*(this.tasaMensual))/(1-(1+this.tasaMensual)**(-totalMeses))
    let totalPagarDecimales = cuotaMensualDecimales*totalMeses;
    this.cuotaMensual = cuotaMensualDecimales.toFixed(2);
    this.totalPagar = (totalPagarDecimales).toFixed(2);
    this.totalInteres = (totalPagarDecimales - montoForm).toFixed(2);
  }
  crearPDF() {
    const doc = new jsPDF();

    // Selecciona la tabla directamente del DOM
    const tabla = this.tablaAmortizacionRef.nativeElement.querySelector('table');

    if (tabla) {
      (autoTable as any)(doc, {
        html: tabla,
        startY: 20,
        headStyles: { fillColor: [41, 128, 185] },
        theme: 'grid'
      });

      doc.save('tabla_amortizacion.pdf');
    } else {
      console.error(' No se encontró la tabla para generar el PDF');
    }
  }
  //Para la tabla

  AEETabla(cuota: number, saldo: number){
    if (saldo <= 0.01 || cuota == 0) {
        this.contadorA = 0;
        return;
    };
    const interesMes = saldo * this.tasaMensual;
    const fondoaCapital = cuota - interesMes;
    //Saldo nuevo
    const saldoNuevo =  saldo - fondoaCapital;
    this.amortizacionArray[this.contadorA] = {
        cuota: cuota,
        intereses: parseInt(interesMes.toFixed(2)),
        PagoCapital: parseInt(fondoaCapital.toFixed(2)),
        SaldoTotal: parseInt(saldoNuevo.toFixed(2))
    };
    this.contadorA++;
    this.AEETabla(cuota, saldoNuevo)
  }

   generarTablaAmortizacion() {
    const mesesPorAño = 12;
    const totalMeses = parseFloat(this.formulario.value.Plazo) * mesesPorAño;
    const tabla: any[] = [];
    let añoActual = 1;
    let meses: any[] = [];

    this.amortizacionArray.forEach((item, index) => {
      if (index >= totalMeses) return;

      const mes = index + 1;
      const saldoFormateado =
        item.SaldoTotal <= 2 && item.SaldoTotal >= -1000
          ? 0
          : item.SaldoTotal ?? 0;

      // Cada 12 meses, cerramos el año
      if ((mes - 1) % mesesPorAño === 0 && meses.length > 0) {
        tabla.push({ ano: añoActual, meses });
        meses = [];
        añoActual++;
      }

      meses.push({
        mes,
        cuota: item.cuota,
        intereses: item.intereses,
        PagoCapital: item.PagoCapital,
        SaldoTotal: saldoFormateado
      });
    });

    // último bloque
    if (meses.length > 0) {
      tabla.push({ ano: añoActual, meses });
    }

    this.tablaAmortizacion = tabla;
    console.log(tabla);
  }
}
