let numeroSecreto = gerarNumeroAleatorio();
let media;
let tentativas = 1;

// let titulo = document.querySelector('h1')
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p') //definindo o que será no HTML
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; 

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} tentativas`;
        document.getElementById('reiniciar').removeAttribute ('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() *10 + 1);
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio;
    tentativas = 1;
    limparCampo();
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
    document.getElementById('reiniciar').setAttribute ('disabled', true);
}

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function olaMundo(nome){
    console.log('Olá' + nome + '!');
}
// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroNumero(numero){
    console.log(numero*2);
}
// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function mediaNumero(num1, num2, num3){
    return media = (num1+num2+num3)/3;
}
// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maiorNumero(num1, num2){
    if(num1 >= num2) {
        return num1;
    } else if (num2 > num1){
        return num2;
    }
}
// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicação(numero){
    return numero*numero;
}