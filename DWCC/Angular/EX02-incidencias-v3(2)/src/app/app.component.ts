import { Component } from '@angular/core';
import { VistaXeralComponent } from './vista-xeral/vista-xeral.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VistaXeralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EX02-incidencias-v3';
}
