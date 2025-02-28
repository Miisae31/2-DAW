import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmisorComponent } from './emisor/emisor.component';
import { ReceptorComponent } from './receptor/receptor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EmisorComponent, ReceptorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '28-Servicio-Mensaxeria';
  receptores: number[] = []; // Lista de receptores activos

  // Este metodo engade un novo receptor ao final do array
  engadirReceptores() {
    this.receptores.push(this.receptores.length - 1 );
  }
}
