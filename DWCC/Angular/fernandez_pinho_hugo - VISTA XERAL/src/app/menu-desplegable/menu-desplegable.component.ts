import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-desplegable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-desplegable.component.html',
  styleUrl: './menu-desplegable.component.css'
})
export class MenuDesplegableComponent {
  // Propiedad para controlar si el menú está visible o no
  isMenuVisible = false;

  // Método para alternar la visibilidad del menú
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  // Método para cerrar el menú cuando el cursor sale
  closeMenu() {
    this.isMenuVisible = false;
  }
}