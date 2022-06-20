console.log(`trabalhando com condicionais`);
const listaDeDestinos = new Array(
    'Salvador',
    'Sao Paulo',
    'Rio de Janeiro'
);

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;

// if (idadeComprador >= 18) {
//     console.log('maior de idade, escolha seu destino')

// } else if (estaAcompanhada) {
//     console.log('esta acompanhada de um maior de idade')
// }
// else {
//     console.log('nao eh maior de idade, nao podemos vender!')
// }

if (idadeComprador >= 18 || estaAcompanhada == true ) {
    console.log('boa viagem')
    listaDeDestinos.splice(2, 1);
} else {
    console.log('nao eh maior de idade, nao podemos vender')
}

console.log('Embarque : \n\n')
if(idadeComprador >= 18 && temPassagemComprada ){
    console.log("boa viagem")
} else{
    console.log('Voce nao pode embarcar!!!')
}



console.log("destinos possiveis");
console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

