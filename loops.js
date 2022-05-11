console.log(`\n trabalhando com condicionais`);

const listaDeDestinos = new Array(
    'Salvador',
    'Sao Paulo',
    'Rio de Janeiro'
    
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true ;

let contador = 0
let destinoExiste = false;
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe")
        destinoExiste = true; 
        break
    }
    contador += 1;
} 




