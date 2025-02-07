import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarxeta',
  standalone: true,
  imports: [],
  templateUrl: './tarxeta.component.html',
  styleUrl: './tarxeta.component.css'
})
export class TarxetaComponent {
  @Input() entrada: string = "";
}
