// Extraemos as referencias aos campos de input do formulario e ao propio formulario
// "document" sempre fai referencia á árbore DOM do documento HTML
// Mediante getElementById obtemos unha referencia ao elemento DOM correspondente con ese id
var nome = document.getElementById('nome');
var apelidos = document.getElementById('apelidos');
var idade = document.getElementById('idade');
var formulario = document.getElementById('formulario');

// Esta función otorga funcionalidade ao botón GARDAR

function gardar(){
    let valorNome = nome.value
    let valorApelidos= apelidos.value
    let valorIdade = idade.value

    // Construimos un obxecto de tipo persoa empregando os valores extraídos do formulario
    persoa = {
        nome: valorNome,
        apelidos: valorApelidos,
        idade: valorIdade

    }

    console.log(persoa);
}

// Esta función otorga funcionalidade ao botón BORRAR
function borrar(){
    formulario.reset();
}

// Esta función otorga funcionalidade ao botón Encher
function encher(){
    nome.value="Pepito";
    apelidos.value="Montoya Júarez"
    idade.value="42";
}
