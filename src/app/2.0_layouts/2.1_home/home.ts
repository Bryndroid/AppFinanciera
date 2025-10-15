import { Component, AfterViewInit } from '@angular/core';
import { Header } from '../../5.0_shared/5.2_header/header';
import { Footer } from '../../5.0_shared/5.1_footer/footer';
import { Navbar } from '../../5.0_shared/5.4_navbar/navbar';
import { RouterOutlet } from "@angular/router";
import { LucideAngularModule,  FileIcon  } from 'lucide-angular';


@Component({
  selector: 'app-home',
  imports: [Header, Navbar, Footer, RouterOutlet,LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit{
  public banderaApp: boolean = false;
  public idTimeout: any;
  readonly fileIcon = FileIcon
  ngAfterViewInit(): void {
     this.idTimeout = setTimeout(()=>{
      this.banderaApp = true;
      clearTimeout(this.idTimeout);
     }, 1500)
   }
}
