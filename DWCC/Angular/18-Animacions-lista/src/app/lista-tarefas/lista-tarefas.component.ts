import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Tarefa } from "../tarefa";
import { filter } from "rxjs";
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
@Component({
  selector: "app-lista-tarefas",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./lista-tarefas.component.html",
  styleUrl: "./lista-tarefas.component.css",
  animations: [
    trigger("entradaSaida", [
      transition(":enter", [
        animate(
          "500ms ease-out",
          keyframes([
            style({
              transform: "scale(0.5)",
              opacity: 0,
              offset: 0,
            }),
            style({
              transform: "scale(1.1)",
              opacity: 0.7,
              offset: 0.7,
            }),
            style({
              transform: "scale(1)",
              opacity: 1,
              offset: 1,
            }),
          ])
        ),
      ]),
      transition(":leave", [
        animate(
          "300ms ease-in",
          style({
            transform: "translateX(100%)",
            opacity: 0,
          })
        ),
      ]),
    ]),
    trigger("realzada", [
      state(
        "pendente",
        style({
          backgroundColor: "white",
          transform: "scale(1)",
        })
      ),
      state(
        "completada",
        style({
          backgroundColor: "green",
          transform: "scale(1.05)",
        })
      ),
      transition("pendente <=> completada", [animate("300ms ease-in-out")]),
    ]),
  ],
})
export class ListaTarefasComponent {
  tarefas: Tarefa[] = [];
  texto: string = "";

  engadir() {
    if (this.texto.trim()) {
      this.tarefas.push({
        id: Date.now(),
        texto: this.texto,
        completada: false,
      });
      this.texto = "";
    }
  }

  eliminar(tarefaEliminar: Tarefa): void {
    this.tarefas = this.tarefas.filter(
      (tarefa) => tarefa.id !== tarefaEliminar.id
    );
  }

  completar(tarefaCompletar: Tarefa): void {
    tarefaCompletar.completada = true;
  }
}
