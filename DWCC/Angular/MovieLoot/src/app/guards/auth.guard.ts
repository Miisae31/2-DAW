import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServizoLoginService } from '../services/servizo-login.service';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router); // Injectamos o Router
  let servicio = inject(ServizoLoginService); // Injectamos o ServizoLoginService

  if (servicio.isLogged()) {  // Se está logueado
    return true;
  } else {
    router.navigate(["/login"]); // Se non está logueado, rediriximos a /login
    return false;
  }
};
