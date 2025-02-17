import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Incidencia {
  data: string;
  descricion: string;
  usuario: string;
  nivel: number;
  solucionada: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ex01-incidencias';
  incidencias: Incidencia[] = [
    { data: "2025-01-01", descricion: "Erro no servidor de correos.", usuario: "usuario1", nivel: 3, solucionada: false },
    { data: "2025-01-02", descricion: "Problemas de acceso á base de datos.", usuario: "usuario2", nivel: 1, solucionada: true },
    { data: "2025-01-03", descricion: "Descoñecido malware detectado.", usuario: "usuario3", nivel: 3, solucionada: false },
    { data: "2025-01-04", descricion: "Caída da conexión a Internet.", usuario: "usuario4", nivel: 2, solucionada: false },
    { data: "2025-01-05", descricion: "Actualización fallida do sistema operativo.", usuario: "usuario5", nivel: 3, solucionada: false },
    { data: "2025-01-06", descricion: "Erro na sincronización de datos.", usuario: "usuario6", nivel: 2, solucionada: false },
    { data: "2025-01-07", descricion: "Acceso non autorizado detectado.", usuario: "usuario7", nivel: 1, solucionada: false },
    { data: "2025-01-08", descricion: "Problema no backup semanal.", usuario: "usuario8", nivel: 3, solucionada: true },
    { data: "2025-01-09", descricion: "Erro de configuración no DNS.", usuario: "usuario9", nivel: 2, solucionada: true },
    { data: "2025-01-10", descricion: "Demora no sistema de login.", usuario: "usuario10", nivel: 2, solucionada: false },
    { data: "2025-01-11", descricion: "Fuga de información detectada.", usuario: "usuario11", nivel: 3, solucionada: false },
    { data: "2025-01-12", descricion: "Erro no servizo de impresión.", usuario: "usuario12", nivel: 1, solucionada: false },
    { data: "2025-01-13", descricion: "Fallou a conexión VPN.", usuario: "usuario13", nivel: 3, solucionada: false },
    { data: "2025-01-14", descricion: "Erro no sistema de copias automáticas.", usuario: "usuario14", nivel: 1, solucionada: false },
    { data: "2025-01-15", descricion: "Problema coa aplicación web principal.", usuario: "usuario15", nivel: 3, solucionada: false },
    { data: "2025-01-16", descricion: "Sobrecarga no servidor principal.", usuario: "usuario16", nivel: 2, solucionada: false },
    { data: "2025-01-17", descricion: "Erro na actualización de software.", usuario: "usuario17", nivel: 2, solucionada: true },
    { data: "2025-01-18", descricion: "Ataque de forza bruta bloqueado.", usuario: "usuario18", nivel: 3, solucionada: false },
    { data: "2025-01-19", descricion: "Erro no sistema de alertas.", usuario: "usuario19", nivel: 3, solucionada: false },
    { data: "2025-01-20", descricion: "Caída do servizo de correo electrónico.", usuario: "usuario20", nivel: 1, solucionada: false }
  ];

  resolverIncidencia(indice: number): void {
    this.incidencias[indice].solucionada = true;
  }
}
