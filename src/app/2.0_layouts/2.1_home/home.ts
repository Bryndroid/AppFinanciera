import { Component } from '@angular/core';
import { Header } from '../../5.0_shared/5.2_header/header';
import { Footer } from '../../5.0_shared/5.1_footer/footer';
import { Navbar } from '../../5.0_shared/5.4_navbar/navbar';
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-home',
  imports: [Header, Navbar, Footer, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
