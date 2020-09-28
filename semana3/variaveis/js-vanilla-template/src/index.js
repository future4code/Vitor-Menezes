// Exercícios de interpretação de código 

// Respostas:

// 1° :
//           10
//           10  5


// 2º:
//          10 10 10


// Exercícios de escrita de código
let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);
// A esposta foi undefined para os dois casos acima
// isso se deu pelo fato de não ter sido atribuido nenhum valor prévio as variaveis nome e idade

nome = prompt("qual é o seu nome? ");
idade = prompt("Qual é a sua idade: ");

console.log(typeof nome);
console.log(typeof idade);

//Foram atibuidos tipos as variaveis que antes eram undefined

console.log(`Olá ${nome}, você tem ${idade} anos.`);
