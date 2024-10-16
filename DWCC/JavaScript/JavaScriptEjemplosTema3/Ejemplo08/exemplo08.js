// Declaramos una funcion que vai permitir "durmir" o navegador durante un tempo especificado en ms, usando promesas
function durmir (tempo) {
    return new Promise(resultado => setTimeout(resultado,tempo)); 
      
}

// Declaramos unha función asíncrona (para poder usar a función "durmir")
async function traballarConCookies(){

    document.cookie = "username=Sofia, expires=Wed, 16 Oct 2024 19:45:00 UTC"; // Creamos unha cookie
    await durmir(5000); // Esperamos 5 seg
    document.cookie = "username=Saínza, expires=Wed, 16 Oct 2024 19:45:00 UTC"; // Creamos unha cookie
    await durmir(5000); // Esperamos 5 seg
    document.cookie = "username=, expires=Wed, 16 Oct 2024 17:00:00 UTC"; // Creamos unha cookie
    await durmir(5000); // Esperamos 5 seg
}

// Invocamos a función que traballa coas cookies
traballarConCookies();

