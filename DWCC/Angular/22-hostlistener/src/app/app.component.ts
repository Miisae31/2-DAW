import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '22-hostlistener';

  @ViewChild('caixa') caixa: ElementRef;

  @HostListener('mouseenter', ['$event.target']) aoEntrarRato(target: HTMLElement): void {
    this.mudarCor('blue');
  }

  @HostListener('mouseleave', ['$event.target']) aoSairRato(target: HTMLElement): void {
    this.mudarCor('red');
  }

  mudarCor(cor: string): void {
    this.caixa.nativeElement.style.backgroundColor = cor;
  }
}
