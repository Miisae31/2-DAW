import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contido',
  standalone: true,
  imports: [],
  templateUrl: './contido.component.html',
  styleUrl: './contido.component.css'
})
export class ContidoComponent {
  @Input() recibida : number = 10; // Declaramos a propiedade que recibirá o valor dende a compoñente nai, e para comprobar que efectivamente o seu valor ven de fóra, inicializámola a un valor inútil

}
