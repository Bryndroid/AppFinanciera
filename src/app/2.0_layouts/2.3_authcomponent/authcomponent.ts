import { Component,AfterViewInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { LucideAngularModule,  FileIcon  } from 'lucide-angular';

@Component({
  selector: 'app-authcomponent',
  imports: [RouterOutlet, LucideAngularModule],
  templateUrl: './authcomponent.html',
  styleUrl: './authcomponent.css'
})
export class Authcomponent implements AfterViewInit{
  readonly FileIcon = FileIcon;
  public banderaApp: boolean = false;
  public idTimeout: any;
  ngAfterViewInit(): void {
     this.idTimeout = setTimeout(()=>{
      this.banderaApp = true;
      clearTimeout(this.idTimeout);
     }, 1500)
   }
}
