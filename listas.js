console.log (`trabalhando com listas`);

 const salvador = 'Salavdor';
 const saoPaulo = 'Sao Paulo';
 const rioDeJaneiro = 'Rio de Janeiro';

const listaDeDestinos = new Array( //isso é um array , ele pode ter varios valores dentro dele...
'Salvador',
'Sao Paulo',
'Rio de Janeiro'
);

listaDeDestinos.push('Curitiba'); // o push adiciona o elemento dentro do array.


console.log("destinos possiveis");
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); // splice remove o elemento da lista (positicao do elemento , quantidade)
console.log(listaDeDestinos[0]); // as chaves selecionam o elemento do array.