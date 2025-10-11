import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js'
import {MatTabsModule} from '@angular/material/tabs';
Chart.register(...registerables);
@Component({
  selector: 'app-inicio',
  imports: [MatTabsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio implements AfterViewInit {
  private datosGanancias =[Math.floor(Math.random() * 2000 -5000),
    Math.floor(Math.random() * 20000 -5000),
    Math.floor(Math.random() * 20000 -5000),
    Math.floor(Math.random() * 20000 -5000),
    Math.floor(Math.random() * 20000 -5000),
    Math.floor(Math.random() * 20000 -5000)
  ];
   private datosPerdida=[Math.floor(Math.random() * 2000 - 5000),
    Math.floor(Math.random() * 20000- 5000),
    Math.floor(Math.random() * 20000 - 5000),
    Math.floor(Math.random() * 20000 - 5000),
    Math.floor(Math.random() * 20000 - 5000),
    Math.floor(Math.random() * 20000 - 5000)
  ];
  private dataOne: any;
  private dataSecond: any;
  myChartOne: any;
  myChartSecond: any;
  ngAfterViewInit(): void {
    this.primerGrafico();
    this.segundoGrafico();
  }

  primerGrafico(){
    this.cambiarDatos();
    this.dataOne = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Ingresos ($)',
        data: this.datosGanancias,
        backgroundColor: 'rgba(56, 224, 123, 0.6)',
        borderColor: '#38E07B',
        borderWidth: 2
      },
      {
        label: 'Costos ($)',
        data: this.datosPerdida,
        backgroundColor: '#b3b0b0ff',
        borderColor: '#b3b0b0ff',
        borderWidth: 2
      }
    ]
  };
    this.myChartOne = new Chart("miChart", {
      type: 'line', // puedes cambiar a 'line' si prefieres
      data: this.dataOne,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Ingresos vs Costos',
            font: {
              size: 18
            }
          },
          legend: {
            position: 'bottom'
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Meses'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Monto en dólares ($)'
            },
            beginAtZero: true
          }
        }
      }
    });
  }

  segundoGrafico(){
    this.cambiarDatos();
    this.dataSecond = {
    labels: ['Comida', 'Transporte', 'Entrenamiento', 'Trabajo', 'Otros'],
    datasets: [
      {
        label: 'Mes pasado',
        data: this.datosPerdida,
        backgroundColor: '#b3b0b0ff', 
        borderColor: '#b3b0b0ff',
        borderWidth: 2
      },
      {
        label: 'Mes actual',
        data: this.datosGanancias,
        backgroundColor: 'rgba(56, 224, 123, 0.7)', 
        borderColor: '#38E07B',
        borderWidth: 2
      }
    ]
  }
    this.myChartSecond =  new Chart("miChartSecond", {
      type: 'bar',
      data: this.dataSecond,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Gastos: Mes Actual vs Mes Pasado',
            font: { size: 18 }
          },
          legend: {
            position: 'bottom'
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: $${context.parsed.y}`;
              }
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Categorías de Gasto'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Monto ($)'
            }
          }
        }
      }
    });
  }

  cambiarDatos(){
    this.datosGanancias =[Math.floor(Math.random() * 20000),
    Math.floor(Math.random() * 2000),
    Math.floor(Math.random() * 20000),
    Math.floor(Math.random() * 20000),
    Math.floor(Math.random() * 2000),
    Math.floor(Math.random() * 20000)
    ];
    this.datosPerdida=[Math.floor(Math.random() * 2000),
    Math.floor(Math.random() * 2000),
    Math.floor(Math.random() * 2000),
    Math.floor(Math.random() * 2000),
    Math.floor(Math.random() * 2000 ),
    Math.floor(Math.random() * 2000 )
    ];
  }
}
