// CREACIÓN DUN ARTIBUTO DIRECTAMENTE A TRAVÉS DOS SEUS DATOS

//  Creamos o novo atributo

var texto = document.getElementById("texto"); // Recuperamos a referencia ao obxecto "texto"

texto.setAttribute("almacen", "Novo atributo HTML creado dende JS"); // Creamos o novo atributo a partir dos seus datos


//  CREACIÓN DUN ATRIBUTO COMO OBXECTO
var atributoAlmacen2 = document.createAttribute("almacen2"); // Creamos un novo obxecto de tipo atributo HTML e nome "almacen2"

atributoAlmacen2.value="Este é o sefundo novo atributo HTML";; // Establecemos o valor do novo obxecto atributo
texto.setAttributeNode(atributoAlmacen2); // Engadimos o novo obxecto atributo ao obxecto "texto"


// ACCESO A UN ATRIBUTO
var atributoAlmacen = texto.getAttributeNode("almacen"); // Recuperamos a referencia ao atributo "almacen" do elemnto "texto"
console.log(atributoAlmacen.name +": " + atributoAlmacen.value) // Amosamos os datos do atributo "almacen"

// MODIFICACION DUN ATRIBUTO (TRATADO COMA OBXECTO)
atributoAlmacen2.value = "Ola mundo!";

// MODIFICACIÓN DUN ATRIBUTO (TRABALLANDO DIRECTAMENTE COS SEUS DATOS)
texto.setAttribute("almacen","Novos datos no almacén");

// ELIMINACIÓN DUN ATRIBUTO
texto.removeAttribute("almacen2");

