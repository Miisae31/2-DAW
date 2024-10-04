var contaxe = 0

// Esta función incrementara o contador e actualizara p texto interno do elemento "texto"
function premer() {
    contaxe++;
    document.getElementById("texto").innerHTML =
    "Premeuse o boton "+contaxe+" veces";
}


document.getElementById("boton").addEventListener("click",premer);
