// Declaramos unha función estándar
function sumar(a,b) {
    return a+b;
}
console.log(sumar(10,15));

// DEclaramos unha función que recibe tres parámetros, sendo un deles unha funcion.
function sumarTexto(x,y,aux) {
    console.log("A suma de "+x+" + "+y+" é " + aux(x,y));
}

// Chamamos á función sumarTexto pasándolle como parámetro dous números e unha funcion "sumar"

sumarTexto(13,14,sumar);

// Chamamos á función sumarTexto pasándolle como parámetro dous números e unha funcion "ánonima"
sumarTexto(12,34,function (a,b) {return a+b;});

// Chamamos á función sumarTexto pasándolle como parámetro dous números e unha funcion "flecha"
sumarTexto(7,88,(a,b) => a+b);

function parametros() {
    if (arguments.length == 0) {
        console.log("Non se recibiu ningún parámetro.")
    } else {
        console.log("Recibironse " + arguments.length + " argumentos")
    }
}

parametros();
parametros(1,2,3);
parametros([1,2,3],(a,b) => a+b, "Ola undo!");