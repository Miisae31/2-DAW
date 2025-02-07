import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as actoresDatos from '../../../../public/data/actores.json';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-actores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actores.component.html',
  styleUrl: './actores.component.css'
})
export class ActoresComponent implements OnInit {
  @Output() actoresEnviados = new EventEmitter<any[]>(); // Enviar actores al padre
  
   jsonActores: any[] = (actoresDatos as any).default; // Importar datos de actores

   ngOnInit(): void {
    console.log('ActoresComponent se ha inicializado'); 
    console.log('Enviando actores al padre...');
    this.actoresEnviados.emit(this.jsonActores); // Enviar actores al padre
   }
  }
