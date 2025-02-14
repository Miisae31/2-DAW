import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('estadoMenu', [
      state('oculto', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('oculto => visible', [
        animate('300ms ease-in-out')
    ])
    ])
  ]
})
export class MenuComponent {
menuVisible: boolean = false;

alternarMenu() {
  this.menuVisible = !this.menuVisible;
}
}
