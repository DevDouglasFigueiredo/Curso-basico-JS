console.log (`trabalhando com condicionais`);

const listaDeDestinos = new Array( 
'Salvador',
'Sao Paulo',
'Rio de Janeiro'
);


console.log("destinos possiveis");
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); // removendo item
console.log(listaDeDestinos[0]); // as chaves selecionam o elemento do array.