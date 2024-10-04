// REcuperamos as referencias a todos os elementos da clase "texto"
var pTexto = document.getElementsByClassName('texto');

// Percorremos todos os elementso da clase "texto" y los sustituimos por el valor de "i"
for (i=0; i< pTexto.length; i ++) {
    pTexto[i].innerHTML = i;
    console.log(pTexto[i].innerHTML);
}



