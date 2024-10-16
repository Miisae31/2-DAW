var select = document.getElementById("provincias");
var boton = document.getElementById("boton");

// Array que conten a listaxe de provincias para encher o select
var provincias = ["A Coruña","Lugo","Ourense","Pontevedra"];



boton.addEventListener("click", () =>{
    // Creamos un elemento option que actuará como opción por defecto do select
    var opciones = document.createElement("option");
    opciones.value = "";
    opciones.textContent = "";
    select.appendChild(opciones);

// Engadimos os elementos 'option' correspondentes aos datos do array ao select
    for(i in provincias){
    opciones = document.createElement("option");
    opciones.value = i;
    opciones.textContent = provincias[i];
    select.appendChild(opciones);
    }
});