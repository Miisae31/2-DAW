import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-pasoapaso',
  standalone: true,
  imports: [],
  templateUrl: './pasoapaso.component.html',
  styleUrl: './pasoapaso.component.css',
  providers: [{
    provide: NG_VALUE_ACCESSOR, // Vainos permitir conectar o noso control personalizado á API de formularios de Angular
    useExisting: forwardRef(() => PasoapasoComponent), // Asociamos o comportamento de controlde formulario á nosa compoñente
    multi: true // Indicamos que o control vai soportar múltiples proveedores
  }]
})
export class PasoapasoComponent implements ControlValueAccessor {
  
  valor: number; // Esta propiedade representa o valor numérico do control
  onChange = (_: any) => {}; // Declaramos un método baleiro (que recibe un valor de tipo 'any). Este método recibirá mais adiante a súa funcionalidade a través do método 'registerOnChange'
  onTouch = () => {}; // Declaramos un método baleiro (que non recibe nada). Este método recibirá máis adiante a súa funcionalidade a través do método 'registerOnTouched'

  isDisabled: boolean; // Esta propiedade vainos permitir habilitar/deshabilitar o control

  // Este metodo disminúe o valor do control nunha unidade
  disminuir() {
    this.valor = this.valor -1
    this.onTouch(); // Marcamos a compoñente como tocada
    this.onChange(this.valor); // Notificamos a API de formularios de Angular do cambio de valor
  }

  aumentar() {
    this.valor = this.valor +1;
    this.onTouch(); // Marcamos a compoñente como tocada
    this.onChange(this.valor); // Notificamos a API de formularios de Angular do cambio de valor
  }

  // Este método é o que utiliza Angular para poder asignarlle un valor ao noso control
  writeValue(novoValor: number): void {
    this.valor = novoValor;
  }

  // Este método vai rexistrar os cambios que se produzan sobre o control de formulario
  registerOnChange(fn: any): void {
    this.onChange = fn; // Asigmanos a funcionalidade recibida á propiedade onChange
  }

  // Este método vai rexistrar cando o noso control de formulario sexa tocado/accedido
  registerOnTouched(fn: any): void {
    this.onTouch = fn; // Asignamos a funcionalidade recibida á propiedade onTouch
  }

  // Este método vai permitir habilitar/deshabilitar o control do formulario
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled; // Asignamos o valor recibido á propiedade isDisabled
  }

  

}
