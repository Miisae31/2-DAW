import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServizoLoginService } from '../services/servizo-login.service';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let servicio = inject(ServizoLoginService);

  if (servicio.isLogged()) {  
    return true;
  } else {
    router.navigate(["/login"]);
    return false;
  }
};
