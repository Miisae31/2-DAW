import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '23-hostlistener-teclado';
  contaEnter: number = 0; // Esta propiedade levará a conta do número de veces que prememos a tecla ENTER
  contaShiftQ: number = 0; // Esta propiedade levará a conta do número de veces que prememos a combinación Shift+Q
  contaClick: number = 0; // Esta propiedade levará a conta do número de veces que facemos click co rato no documento
  contaScroll: number = 0; // Esta propiedade levará a conta do número de veces que facemos scroll na páxina

  // Funcionalidade no caso de que se prema a tecla ENTER
  @HostListener('document:keydown.enter', ['$event']) premerEnter() {
    this.contaEnter++;
  }

  // Funcionalidade no caso de que se prema a combinación Shift+Q
  @HostListener('document:keydown.shift.q', ['$event']) premerShiftQ() {
    this.contaShiftQ++;
  }

  // Funcionalidade no caso de que se faga click
  @HostListener('document:click', ['$event']) facerClick() {
    this.contaClick++;
  }

    // Funcionalidade no caso de que se faga scroll
    @HostListener('window:scroll', ['$event']) facerScroll() {
      this.contaScroll++;
    }
}
