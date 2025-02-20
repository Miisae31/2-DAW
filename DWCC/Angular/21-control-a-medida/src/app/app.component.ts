import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PasoapasoComponent } from './pasoapaso/pasoapaso.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PasoapasoComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '21-Control a medida';

  formulario: FormGroup;

  constructor(private elaborador: FormBuilder) {
    this.formulario = this.elaborador.group({
      artigo: ['',],
      descricion: ['',],
      cantidade: [0,],
    });
  }

  gardar(): void {
    console.table(this.formulario.value);
  }

  
}
