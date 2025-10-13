import { Component, AfterViewInit} from '@angular/core';
import { LucideAngularModule,  FileIcon, Bold  } from 'lucide-angular';
import { Chart, registerables } from 'chart.js'
import { Router } from '@angular/router';

Chart.register(...registerables);
@Component({
  selector: 'app-about-us',
  imports: [LucideAngularModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs implements AfterViewInit{
  readonly fileIcon = FileIcon;
  private dataOne: any;
  typeChart: string[]  = ["line", "bar"];
  contador: number  = 0;
  myChart: any;
  private datosGanancias = {
      Enero: Math.floor(Math.random() * 20000 - 5000),   
      Febrero: Math.floor(Math.random() * 20000 - 5000),
      Marzo: Math.floor(Math.random() * 20000 - 5000),
      Abril: Math.floor(Math.random() * 20000 - 5000),
      Mayo: Math.floor(Math.random() * 20000 - 5000),
      Junio: Math.floor(Math.random() * 20000 - 5000),
      Julio: Math.floor(Math.random() * 20000 - 5000),
      Agosto: Math.floor(Math.random() * 20000 - 5000),
      Septiembre: Math.floor(Math.random() * 20000 - 5000),
      Octubre: Math.floor(Math.random() * 20000 - 5000),
      Noviembre: Math.floor(Math.random() * 20000 - 5000),
      Diciembre: Math.floor(Math.random() * 20000 - 5000),
    };
  constructor(private route: Router){
    
  }  
  ngAfterViewInit(): void {
    //Variable para configurar todo el coso (Solamente cambiar esta variable para cambiar el contenido de la gráfica)
    this.dataOne = {labels: Object.keys(this.datosGanancias),
        datasets: [{
          label: 'Activos Brutos',
          data: Object.values(this.datosGanancias),
          backgroundColor: '#38E07B',
          borderColor: 'black',
          borderWidth: 2,
          borderRadius: 10
    }]};
    //Creación  del objeto Chart
    this.myChart = new Chart("miChart", {
      type: "bar",
      data: this.dataOne,
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              font:{
                weight: "bold",
              } // Texto en negro
            },
            
          }
        },
        scales: {
          x: {
            ticks: { color: 'white' } 
          },
          y: {
            ticks: { color: 'white' } 
          }
        }
      }
    });
    console.log(this.myChart);
    setInterval(()=>{
      this.datosGanancias  ={
      Enero: Math.floor(Math.random() * 20000 - 5000),   
      Febrero: Math.floor(Math.random() * 20000 - 5000),
      Marzo: Math.floor(Math.random() * 20000 - 5000),
      Abril: Math.floor(Math.random() * 20000 - 5000),
      Mayo: Math.floor(Math.random() * 20000 - 5000),
      Junio: Math.floor(Math.random() * 20000 - 5000),
      Julio: Math.floor(Math.random() * 20000 - 5000),
      Agosto: Math.floor(Math.random() * 20000 - 5000),
      Septiembre: Math.floor(Math.random() * 20000 - 5000),
      Octubre: Math.floor(Math.random() * 20000 - 5000),
      Noviembre: Math.floor(Math.random() * 20000 - 5000),
      Diciembre: Math.floor(Math.random() * 20000 - 5000),
      };
      this.dataOne = {labels: Object.keys(this.datosGanancias),
        datasets: [{
          label: 'Activos Brutos',
          data: Object.values(this.datosGanancias),
          backgroundColor: '#38E07B',
          borderColor: 'black',
          borderWidth: 2,
          borderRadius: 10
      }]};
      this.myChart.config._config.type = this.cambioChart();      
      this.myChart.data = this.dataOne;
      console.log(this.myChart);
      this.myChart.update()
    }, 5000);
  }
  cambioChart(): string {
    if(this.contador <= 1){
      const indice=  this.contador;
      this.contador++;
      return this.typeChart[indice];
    }
    this.contador = 0;
    return this.typeChart[this.contador];
  }

  navegarLogin(){
    this.route.navigateByUrl("/Registro")
  }
}

