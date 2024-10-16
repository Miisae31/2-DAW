var select = document.getElementById("provincias");
var boton = document.getElementById("boton");

// Array que conten a listaxe de provincias para encher o select
var provincias = ["A Coruña","Lugo","Ourense","Pontevedra"];

var opciones = document.createElement("option");
opciones.value = "acoruna";
opciones.textContent = "A Coruña";
select.appendChild(opciones);


boton.addEventListener("click", () =>{
   listaOpciones = document.getElementsByTagName("option");
   var arrayItems = Array.from(listaOpciones);
   arrayItems.forEach(element => {
    let ourense = document.createElement("option");
    ourense.textContent = "Ourense";
    let lugo = document.createElement("option");
    lugo.textContent = "Lugo";
    let pontevedra = document.createElement("option");
    pontevedra.textContent = "Pontevedra";
    select.insertBefore(pontevedra,element);
    select.insertBefore(ourense,element);
    select.insertBefore(lugo,element);

   });
});
