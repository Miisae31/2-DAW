import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServizoLoginService } from '../services/servizo-login.service';

export const adminGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
    let servicio = inject(ServizoLoginService);
  
    if (servicio.isAdmin()) {  
      return true;
    } else {
      router.navigate(["/login"]);
      return false;
    }
  
};
