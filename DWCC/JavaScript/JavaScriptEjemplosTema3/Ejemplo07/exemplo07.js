var nome = document.getElementById("nome");
var boton = document.getElementById("boton");
var formulario = document.getElementById("form");
var persoas =["Pepe","Lucia"];

function engadir() {
    limparErros();
    // Comprobamos que o nome non estea baleiro
    if(nome.value == ""){
        let mensaxeErro = document.createElement("p"); // Creamos o elemento que amosará a mensaxe de erro
        mensaxeErro.textContent = "O nome non pode estar en branco"; // Cubrimos o texto da mensaxe de erro
        mensaxeErro.style.color = "red"; // Dámoslle cor vermella en CSS
        nome.parentNode.insertBefore(mensaxeErro,nome);
        // Se puede colocar un id a formulario y llamarlo "form.insertBefore(mensaxeErro,nome);"
        // O se puede llamar al parent node directamente como en este caso
        
        // Este return finaliza a función xa que non se cumpriu a validación
        return;
    }
    
    // No caso de que o nome si estea cuberto no input
    if (persoas.includes(nome.value)) {
        let mensaxeErro = document.createElement("p");
        mensaxeErro.textContent = "O nome non pode estar repetido";
        mensaxeErro.style.color = "red";
        nome.parentNode.insertBefore(mensaxeErro,nome);
        return;
    }

    // Se chegamos a este punto quere dicir que o nome está cuberto e non hai
    // duplicado no array, polo que insertamos
    persoas.push(nome.value);
    console.log(persoas);

    // Limpamos o formulario
    formulario.reset();
}

// Esta funcion limpa as mensaxes de erro previas
function limparErros(){
    let erros = document.getElementsByTagName("p");
    for(let erro of Array.from(erros)) {
        erro.remove();
    }
   
}

boton.addEventListener("click", engadir);