import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltar]',
  standalone: true
})
export class ResaltarDirective {
@Input() fondo: string = 'yellow'; // Cor que se aplicará ao pasar o rato (pódese modificar dende o HTML se non a modifcamos colle o valor por defecto "yellow")
private corOrixinal: string = ''; // Esta propiedade gardará a cor que tiña orixinalmente o elemento para que no se perda

// No constructor declaramos unha propiedade de tipo ElementRef que referirá ao propio elemento HTML sobre o que se aplica a directiva, e unha propiedade de tipo Renderer2 que nos permitirá modificar estilos de manera segura
  constructor(private elemento: ElementRef, private renderizador: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.corOrixinal = this.elemento.nativeElement.style.backgroundColor;

    this.renderizador.setStyle(this.elemento.nativeElement, 'backgroundColor', this.fondo);
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Recuperamos a cor orixinal
    this.renderizador.setStyle(this.elemento.nativeElement,'backgroundColor', this.corOrixinal);
  }
}
