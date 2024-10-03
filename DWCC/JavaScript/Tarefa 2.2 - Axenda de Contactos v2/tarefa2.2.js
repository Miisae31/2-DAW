var persoas = []; // Declaramos el array persoas
var nome = document.getElementById("nome"); // Aquí almacenamos el nombre que nos pase el usuario mediante el formulario
var apelidos = document.getElementById("apelidos"); // Aquí almacenamos los apellidos que nos pase el usuario mediante el formulario
var telefono = document.getElementById("telefono"); // Aquí almacenamos el teléfono que nos pase el usuario mediante el formulario
var email = document.getElementById("email"); // Aquí almacenamos el email que nos pase el usuario mediante el formulario
var enderezo = document.getElementById("enderezo"); // Aquí almacenamos el nombre que  nos pase el usuario mediante el formulario
var comentarios = document.getElementById("comentarios"); // Aquí almacenamos los comentarios que nos pase el usuario mediante el formulario (aunque no los utilicemos apareceran en la consola si asi quisiesemos)
var listaxeContactos = document.getElementById("listaxe-contactos"); // Realmente esta variable solo la usamos para añadir en el html un parrafo donde colocar los datos de las persoas.
var formulario = document.getElementById('formulario-contactos'); // Aqui almacenamos todo lo del formulario para posteriormente borrarlo


function engadirContacto() {
    let valorNome = nome.value;
    let valorApelidos = apelidos.value;
    let valorTelefono = telefono.value;         // Aquí creamos unas variables locales dentro de la función donde le asignaremos los valores de las variables globales
    let valorEmail = email.value;
    let valorEnderezo = enderezo.value;
    let valorComentarios = comentarios.value;

    let persoa = {
        nome: valorNome,
        apelidos: valorApelidos,
        telefono: valorTelefono, // Creamos el objeto persoa con cada propiedad (a cada propiedad le asignamos su correspondiente variable local)
        email: valorEmail,
        enderezo: valorEnderezo,
        comentarios: valorComentarios
    }

    persoas.push(persoa); // Aqui añadimos la nueva persona dentro de nuestro array persoas

    // Aquí ordenamos nuestro array persoa alfabeticamente
    persoas.sort(function(a,b){ 
        if (a.nome < b.nome) {
            return -1               // Aqui comparamos si a es menor que b, o mejor dicho si debería aparecer antes de b (alfabeticamente) si esto se cumple devuelve -1 y coloca a antes que b
        }
        if (a.nome > b.nome) {
            return 1                // Aqui comparamos si a es mayor que b, de ser así debería aparecer después de b (alfabeticamente) si esto se cumple devuelve 1 y coloca a después de b
        }
        return 0;
    })
    actualizarListaxe(); // Aquí llamamos a la función que hace que se vean nuestras personas y sus datos por pantalla

    // Limpiar el formulario
    
    formulario.reset(); // Aquí reseteamos el formulario para borrar los datos que habiamos rellenado previamente

    
}

function actualizarListaxe() { // Declaramos la función
    let contactoDatos = "";    // Declaramos contactoDatos como variable "global" (ya que solo es global dentro de esta función para la otra función)

    // Declaramos nuestro bucle que cogera las propiedades de cada objeto persoa dentro de nuestro array
    persoas.forEach(function(persoa) {
        contactoDatos += "<p>" + persoa.nome + " " + persoa.apelidos + " " + ", Tlf.: " + persoa.telefono + ", E-mail: " + persoa.email + ", Enderezo: " + persoa.enderezo + "</p>";
        // Aqui estamos creando un nuevo parrafo hijo de nuestro div en el html. Este parrafo incluira todos los datos de la persoa en cuestión
        
    });
    // Aqui estamos añadiendo lo que ya tenia nuestro div con id listaxe-contactos y los datos de la persona entre etiquetas de párrafo
    listaxeContactos.innerHTML = contactoDatos;
    
}

// Creamos la función buscar contacto
function buscarContacto() {

    let nombreABuscar = nome.value.toLowerCase(); // Creamos una variable que sea igual al valor del nombre transformado en un string en minusculas (Para el case-insensitive)

    apelidos.value = ''; 
    telefono.value = '';    // Vaciamos todo el formulario por si acaso quedara algun dato residual
    email.value = '';
    enderezo.value = '';

    // Creamos un bucle que recorra nuestro array con un condicional if dentro
    persoas.forEach(function(persoa){
        if (persoa.nome.toLowerCase() === nombreABuscar) { // Declaramos la condicion de que si el nome de alguno de los objetos del array coincide con el valor de nombreABuscar, se cubra el formulario
            nome.value = persoa.nome; // Cubrimos el campo de "nombre" del formulario con el dato 'nome' del objeto del array 
            apelidos.value = persoa.apelidos; // Cubrimos el campo de "apelidos" del formulario con los datos 'apelidos' del objeto del array 
            telefono.value = persoa.telefono; // Cubrimos el campo de "teléfono" del formulario con el dato 'telefono' del objeto del array  
            email.value = persoa.email; // Cubrimos el campo de "email" del formulario con el dato 'email' del objeto del array  
            enderezo.value = persoa.enderezo; // Cubrimos el campo de "enderezo" del formulario con el dato 'enderezo' del objeto del array 
        }
    });
    
}


function eliminarContacto(){    // Creamos una funcion que elimine un contacto del array y aparezca la lisa actualizada
    let contador = -1;          // Creamos un contador para identificar la posición del array donde eliminar la persona
    let nombreAEliminar = nome.value.toLowerCase();     // Creaemos una variable que almacene el nombre que escribimos en el input
        persoas.forEach(function(persoa){       // Hacemos un bucle que recorra cada elemento del array
            contador++;         // Cada vez que se avanza de objeto el contador aumenta su valor de manera que sirve como índice
                if (persoa.nome.toLowerCase() === nombreAEliminar) {        // Hacemos un if donde si el nombre que colocamos en el input coincida borre el elemento del array
                    persoas.splice(contador,1);         // Utilizamos la funcion splice para indicar donde borrar y cuantos elementos borrar hacia delante (con el elemento del indice incluído)
                }     
        });

        
    
    actualizarListaxe();        // Actualizamos la listaxe para qeu ya no aparezca el elemento eliminado
    
}


function modificarContacto(){       // Creamos una funcion que modifiqe

    let nombreAModificar = nome.value.toLowerCase();        // Creaemos una variable que almacene el nombre que escribimos en el input
        persoas.forEach(function(persoa){       // Hacemos un bucle que recorra cada elemento del array
            
            if (persoa.nome.toLowerCase() === nombreAModificar) {       // Hacemos un if donde si el nombre que colocamos en el input coincide modifica el elemento del array
                persoa.nome = nome.value   // Cubrimos la propiedad de nombre del objeto del array con el dato 'nome' del input
                persoa.apelidos = apelidos.value   // Cubrimos la propiedad de apelido del objeto del array con el dato 'apelidos' del input 
                persoa.telefono = telefono.value   // Cubrimos la propiedad de telefono del objeto del array con el dato 'telefono' del input  
                persoa.email = email.value   // Cubrimos la propiedad de email del objeto del array con el dato 'email' del input  
                persoa.enderezo = enderezo.value // Cubrimos la propiedad de comentario del objeto del array con el dato 'comentario' del input
            }     
        });

        
    console.log(persoas)

    actualizarListaxe();
    
}

// Fin del código
