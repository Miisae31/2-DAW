import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServizoLoginService } from '../services/servizo-login.service';

export const adminGuard: CanActivateFn = (route, state) => {
  let router = inject(Router); // Inyectamos el servicio Router
    let servicio = inject(ServizoLoginService); // Inyectamos el servicio de login
  
    if (servicio.isAdmin()) {   // Si el usuario es admin, permitimos el acceso
      return true; 
    } else {
      router.navigate(["/login"]); // Si no, redirigimos al login
      return false;
    }
  
};
