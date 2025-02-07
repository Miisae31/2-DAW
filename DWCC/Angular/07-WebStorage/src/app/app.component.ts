import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = '07-WebStorage';
  texto: string = "";
  navegador: boolean = isPlatformBrowser(inject(PLATFORM_ID));
  
  escribirWS() {
    // Unha posible solución para o erro de referencia ao acceder a WebStorage
    if (this.navegador) {
      localStorage.setItem("clave","valor");
    }
  }

  lerWS() {
    // Outra posible solución para o erro de referencia ao acceder a WebStorage
    if (typeof localStorage !== 'undefined') {
      this.texto = localStorage.getItem("clave");
    }
  }

  ngOnInit(): void {
    
  }
}
