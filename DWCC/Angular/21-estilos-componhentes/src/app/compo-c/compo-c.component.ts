import { Component } from '@angular/core';
import { CompoAComponent } from '../compo-a/compo-a.component';
import { CompoBComponent } from '../compo-b/compo-b.component';

@Component({
  selector: 'app-compo-c',
  standalone: true,
  imports: [CompoAComponent, CompoBComponent],
  templateUrl: './compo-c.component.html',
  styleUrl: './compo-c.component.css'
})
export class CompoCComponent {

}
