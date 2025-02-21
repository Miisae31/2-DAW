import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudeJsonService } from './solicitude-json.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = '22-http-cliente';
  usuarios: any;

  constructor(private servizo: SolicitudeJsonService) {}

  ngOnInit(): void {
    let resultado: Observable<Object> = this.servizo.obterJSON('https://jsonplaceholder.typicode.com/users')
    
    resultado.subscribe(datos => {
      this.usuarios = datos as any[];
    })
  }
}
