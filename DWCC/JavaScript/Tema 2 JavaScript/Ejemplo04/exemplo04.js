// O OPERADOR DE PROPAGACIÓN SOBRE ARRAYS
var provinciasNorte = ['A coruña','Lugo'];
var provinciasSur = ['Ourense','Pontevedra'];

// Concatemos dous ou máis arrays
var provincias = [...provinciasNorte,...provinciasSur];
console.log(provincias);

// Realizar unha copia "por valor"
var copia = [...provincias];
copia[0] = 'Salamanca';
console.log(provincias);
console.log(copia);

// Desestruturar arrays (asignar nomes as súas distintas partes)
var [un,dous,...resto] = [1,2,3,4,5,6,7,8];
console.log(un);
console.log(dous);
console.log(resto);

// O OPERADOR DE PROPAGACIÓN SOBRE OBXECTOS

var persoa = {
    nome: 'Xiana Leira Fonte',
    idade: 30
}

var datos = {
    enderezo : 'Rúa Monfero, 5, Ferrol',
    telefono : 645131353
}
// Combinar obxectos
var datosCompletos = {...persoa, ...datos};
console.log(datosCompletos);

// Realizar una copia "por valor"
var copiaObx = {...persoa};
copiaObx.nome = 'Lucia';
console.log(persoa);
console.log(copiaObx);

// Desestruturar obxectos
var {persoaNova, ...datosResto} = {
    nome: 'Xoan',
    idade: 19,
    pais: 'España'
}
console.log(persoaNova);
console.log(datosResto);
