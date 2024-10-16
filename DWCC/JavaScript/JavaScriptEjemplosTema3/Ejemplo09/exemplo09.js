// Creamos unha serie de cookies
document.cookie = "username=Lucía";
document.cookie = "contrasinal=abc123..";
document.cookie = "lang=es";
document.cookie = "modo=oscuro";
console.log(document.cookie); // consultamos as cookies actuais
document.cookie = "modo=claro"; // Modificamos unha cookies
console.log(document.cookie); // Voltamos consultar as cookies actuais

// Separamos as cookies nun array de pares/valor
var cookies = document.cookie.split('; ');
console.log(cookies);
// Percorremos o array de cookies (para procurar o valor do "contrasinal")
cookies.forEach(cookie => {
    let parClaveValor = cookie.split("="); // Separamos a cookie nun array de dous elementos (par e valor)

    // Se o primeiro elemento do array parClaveValor é "contrasinal"
    if (parClaveValor[0] == "contrasinal") {
        console.log(parClaveValor[1]) // Imprimimos o valor do contrasinal
    }

});

// Percorremos o array de cookies (para a eliminar a cookie "modo")

for (indice of cookies) {
    let parClaveValor = indice.split("=");

    document.cookie = parClaveValor[0]+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"


}

cookies.forEach(cookie => {
    let parClaveValor = cookie.split("=");

    document.cookie = parClaveValor[0] +"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
})
