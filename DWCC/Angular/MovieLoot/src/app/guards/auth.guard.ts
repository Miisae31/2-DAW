import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let usuarioLogueado = localStorage.getItem("usuarioLogueado");



  if (usuarioLogueado) {
    return true;
  } else {
    router.navigate(["/login"]);
    return false;
  }
};
