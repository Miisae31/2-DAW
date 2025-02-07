import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const restrinxidoGuard: CanActivateFn = (route, state) => {
  let router = inject(Router); //  Inxectamos o Router (singleton) para poder redirixir o tráfico
  let usuario = sessionStorage.getItem("usuario"); // Recuperamos o valor do usuario actual dende sessionStorage

  // Comprobamos se había usuario gardado en sessionStorage
  if (usuario) {
    return true;
  } else {
    router.navigate(['']); // Se non hai usuario logueado impedimos o acceso á ruta e rediriximos á páxina de login
    return false;
  }
  
};
