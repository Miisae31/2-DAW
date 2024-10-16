var corpo = document.getElementById("corpo");

// Creamos un elemento de tipo h1
var titulo = document.createElement("h1");
titulo.textContent = "Comunidades Autonomas"; // Engadimos texto ao h1 creado

// Engadimos o elemetno h1 ao corpo da páxina
corpo.appendChild(titulo);

// Modificamos atributos HTML
titulo.style = "color: red";
titulo.id = "titulo";
titulo.textoOculto = "Ola Mundo!"; // Un atributo non estandar
console.log(titulo.textoOculto);

// Engadimos un elemento de lista non ordenada
var lista = document.createElement("ul"); // Creamos o elemento lista
corpo.appendChild(lista);

// Declaramos un array cos datos das comunidades
var comunidadesAutonomas = ["Andalucia","Aragon","Asturias","Baleares","Galicia","Castilla y León"];

comunidadesAutonomas.forEach((comunidade) => {
    let comunidadeLista = document.createElement("li");// Creamos un elemento lista
    comunidadeLista.textContent = comunidade; // Enchemos o texto do elemento
    //comunidadeLista.className = "comunidade";
    comunidadeLista.classList.add("comunidade"); // Metodo mais recomendable
    lista.appendChild(comunidadeLista); // Engadimos a comunidade á lista
});

// Engadir un boton que poña "Independizarse"
// Ao premer o boton eliminara a comunidade de CyL
// E creara na sua posicion duas comunidades novas
// Castela e "Pais Leones"
// A modificacion farase sobre a lista html
document.getElementById("eliminarCyL").addEventListener("click", () => {
    var items = document.getElementsByTagName("li");
    var arrayItems = Array.from(items); // Convertir HTMLCollection a array

    arrayItems.forEach((element, i) => {
        // Verificar si el texto del elemento es "Castilla y León"
        if (element.textContent === "Castilla y León") {
            let castilla = document.createElement("li");
            castilla.textContent ="Castilla";
            let paisLeones = document.createElement("li")
            paisLeones.textContent = "País Leonés";
      
            lista.insertBefore(castilla,element);
            lista.insertBefore(paisLeones,element);
            // Eliminar el elemento del DOM
            element.remove();
        }
    });
});


