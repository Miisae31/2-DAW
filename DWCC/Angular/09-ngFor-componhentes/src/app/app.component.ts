import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementoSimpleComponent } from './elemento-simple/elemento-simple.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ElementoSimpleComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '09-ngFor-componhentes';
  listaxe: number[] = [1,2,3,4,5,6,7,8,9,10];
}
