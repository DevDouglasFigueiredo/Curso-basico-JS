console.log(`\n trabalhando com condicionais`);

const listaDeDestinos = new Array(
    'Salvador',
    'Sao Paulo',
    'Rio de Janeiro'
    
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;


if (idadeComprador >= 18 || estaAcompanhada == true ) {
    console.log('boa viagem')
    listaDeDestinos.splice(2, 1); //removendo item ( cidade)
    temPassagemComprada = true;
} else {
    console.log('nao eh maior de idade, nao podemos vender')
    temPassagemComprada = false;
}

console.log('Embarque : \n\n')
if(idadeComprador >= 18 && temPassagemComprada ){
    console.log("boa viagem")
} else{
    console.log('Voce nao pode embarcar!!!')
}



console.log("\n destinos possiveis");
console.log(listaDeDestinos);



