// CREACIÓN DA BASE DE DATOS (HABILITAMOS INDEXDB)
var novaBD = window.indexedDB;

// Comprobamos que a base de datos está dispoñible

if (novaBD){
    var basedatos; // Declaramos un obxecto que usaremos para traballar sobre a base de datos

}

// Declaramos unha variable "solicitude" que resultará de tentar abrir a nosa BD (ou de creala se non existe)
var solicitude = novaBD.open("BASE", 1); // O primeiro parámetro será o nome da BD a abrir, e o segundo a versión

// Definimos o comportamento no caso de que a solicitude de creación/apertura tivese éxitp
solicitude.onsuccess = () => {
    basedatos = solicitude.result; // Gardamos o resultado da solicitude na variable "basedatos"
    console.log("ABRIUSE A BASE DE DATOS");
};

// Definimos o comportamento no caso de que a BD requira actualización (é dicir, se queremos traballar sobre ela)

solicitude.onupgradeneeded = () => {
    basedatos = solicitude.result; // Gardamos o resultado da solicitude na variable "basedatos"
    // Cremos un novo almacén de datos de nome "coches" na BD, indicando que os obxectos contidos no mesmo terán un campo clave chammado "matrícula"
    let almacenCoches = basedatos.createObjectStore("coches". { keyPath: "matricula"});
    console.log("CREOUSE DO ALMACÉN coches");
};