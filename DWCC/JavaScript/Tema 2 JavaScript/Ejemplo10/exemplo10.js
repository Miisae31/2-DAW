// Declaramos un array de obxectos
var persoas = [
    {nome: 'Pepe', idade:45},
    {nome: 'Lucia', idade:12},
    {nome: 'Jose', idade:19},
    {nome: 'Laura', idade:35},
    {nome: 'Raquel', idade:92},
    {nome: 'Hugo', idade:54},
    {nome: 'Aroa', idade:53},
    {nome: 'Marcos', idade:14},
    {nome: 'Borja', idade:28}
      
];
  
 // Chamamos a sort e pasámoslle como parámetro unha funcion que ordena os nomes alfabeticamente
  persoas.sort(function(a,b) {
    if (a.nome < b.nome) {
    return -1; // Se a é alfabeticamente anterior a b
    }
    if (a.nome > b.nome) {
      return 1; // Se b é alfabeticamente anterior a a
    }

  return 0; // Se son iguais
  });
 
console.log(persoas);

// Chamamos a sort e pasámoslle como parámetro uncha función que ordena as idades de maior idade a menor idade
persoas.sort(function(a,b) {
  return b.idade-a.idade; 
  });
  console.log(persoas);