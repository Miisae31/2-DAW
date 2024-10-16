function durmir (tempo) {
    return new Promise(resultado => setTimeout(resultado,tempo)); 
      
}

async function traballarConWS(){
    sessionStorage.setItem("username","Sofía"); // Almacenamos un elemento en WS
    await durmir (5000); // Esperamos 5 seg
    sessionStorage.removeItem("username"); // Eliminamos o item de clave "username"
    await durmir(5000); // Esperamos 5 seg
    sessionStorage.setItem("username","Saínza"); // Almacenamos un elemnto en WS
    await durmir(5000); // Esperamos 5 seg
    console.log(sessionStorage.getItem("username")); // Accedemos ao item de clave "username"
    console.log(sessionStorage.key(0)); // Consultamos a clave que está na posición "0"
    await durmir(5000);
    sessionStorage.clear(); // Baleiramos todo sessionsStorage
}

traballarConWS();

