import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncarTexto',
  standalone: true
})
export class TruncarTextoPipe implements PipeTransform {

  // O noso pipe vai recibir como parámetro un texto e un numero máximo de carácteres (se non se indica un máximo este será 200)
  transform(texto: string, lonxitude: number = 200): string {
    if (!texto) {
      return '';
    }
    
    if (texto.length <= lonxitude) {
      return texto;
    }


    // Procuramos o último espazo antes da lonxitude maximaa indicada
    let puntoCorte = texto.lastIndexOf(' ', lonxitude);

    // Se non hai espazos dentro do limite cortamos directamente na lonxitude maxima
    if (puntoCorte == -1) {
      puntoCorte = lonxitude;
    }

    return texto.substring(0, puntoCorte) + '...';
  }

}
