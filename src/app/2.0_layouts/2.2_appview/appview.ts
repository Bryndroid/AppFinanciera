import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
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
export class Appview {
   readonly FileIcon = FileIcon;
}
