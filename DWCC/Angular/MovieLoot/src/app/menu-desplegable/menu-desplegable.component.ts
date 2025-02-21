import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ServizoLoginService } from '../services/servizo-login.service';

@Component({
  selector: 'app-menu-desplegable',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-desplegable.component.html',
  styleUrl: './menu-desplegable.component.css'
})
export class MenuDesplegableComponent {

  constructor(private servicio: ServizoLoginService) {}

  // Propiedad para controlar si el menú está visible o no
  isMenuVisible = false;

  // Método para alternar la visibilidad del menú
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  // Método para cerrar el menú cuando el cursor sale
  closeMenu() {
    this.isMenuVisible = false; // Cerramos el menú
  }

  isAdmin() {
    return this.servicio.isAdmin(); // Comprobamos si el usuario es administrador
  }

  isLogged() {
    return this.servicio.isLogged(); // Comprobamos si el usuario está logueado
  }

  logout() {
    this.servicio.logoutUsuario(); // Cerramos sesión
  }

  
}