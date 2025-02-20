import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ServizoLoginService } from "../services/servizo-login.service";
import { Router, ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: "app-edit-users",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: "./edit-users.component.html",
  styleUrl: "./edit-users.component.css",
})
export class EditUsersComponent {
  formularioCreate: FormGroup;
  usuarios: any[];
  usuarioEditado: any;  
  indice: number;
  constructor(
    private elaborador: FormBuilder,
    private servicio: ServizoLoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formularioCreate = this.elaborador.group({
      username: ["", [Validators.required]],
      contrasenha: ["", [Validators.required]],
      rol: ["", [Validators.required]],
    });
  }

 


  
  registrar(evento: Event) {
    evento.preventDefault();
    if (this.formularioCreate.valid) {
      const usuarioModificado = this.formularioCreate.value;
      this.servicio.editUser(this.indice, usuarioModificado); // Llamada al servicio para editar
      this.redirect(); // Redirigir después de editar
    } else {
      this.formularioCreate.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.servicio.subcribirse$().subscribe((usuarios) => {
      this.usuarios = usuarios;

      this.route.params.subscribe((params: any) => {
        this.indice = params["indice"];
        this.usuarioEditado = this.usuarios[this.indice];
  
        if (this.usuarioEditado) {
          this.formularioCreate.patchValue({
            username: this.usuarioEditado.username,
            contrasenha: this.usuarioEditado.contrasenha,
            rol: this.usuarioEditado.rol,
          });
        }
      });
    });
    
  }

  redirect() {
    if (this.formularioCreate.valid) {
      this.router.navigate(["/manage-users"]);
    }
  }

  // GETTERS (para facilitar o traballo cos campos de formulario)

  get username() {
    return this.formularioCreate.get("username");
  }

  get contrasenha() {
    return this.formularioCreate.get("contrasenha");
  }

  get rol() {
    return this.formularioCreate.get("rol");
  }

  get usernameValido(): boolean {
    return (this.username?.valid && this.username?.touched) || false;
  }

  get usernameInvalido(): boolean {
    return (this.username?.invalid && this.username?.touched) || false;
  }

  get contrasenhaUsuarioValida(): boolean {
    return (this.contrasenha?.valid && this.contrasenha?.touched) || false;
  }

  get contrasenhaUsuarioInvalida(): boolean {
    return (this.contrasenha?.invalid && this.contrasenha?.touched) || false;
  }

  get rolValido(): boolean {
    return (this.rol?.valid && this.rol?.touched) || false;
  }

  get rolInvalido(): boolean {
    return (this.rol?.invalid && this.rol?.touched) || false;
  }

  // this.formulario.patchValue(____); (Meter objeto dentro y ya rellena el formulario)
}
