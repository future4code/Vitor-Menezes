// Exercícios de interpretação de código

// exercicio 01:

    // solicita que o suuário digite um numero qualquer através do prompt no navegador
    //esse valor será armazenado na variavel respostaDoUsuario
    // a const numeros receberá o valor de de respostaDoUsuario convertido para o tipo Number
    // o if verificará se o valor de numero dividido por 2 é giaual a zero e se o tipo tambem é Number
    // caso a condição seja verdadeira será exibida a mensagem  "Passou no teste." no console
    //caso não seja será exibida a mensagem  "Não passou no teste."


//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------


// exercicio 02:

    // a - o codigo serve para retornar o nome e o valor da fruta de acordo com a escolha feita pelo usuário

    // b -  O preço da fruta Maçã  é  R$ 2.25

    // c - O preço da fruta  Pêra  é  R$  5


//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------


// exercicio 03:

    // a - Solicitando que o usuário digite um número pelo prompt do navegadore armazenando na variavel numero
    // b - para o valor 10   Esse número passou no teste
    // b - para o valor -10   não apareceria nenhuma mensagem
    // c - Aperece  o seguinte erro    "index.js:41 Uncaught ReferenceError: mensagem is not defined"
            // Isso acontece pq o console não esta no escopo do if


//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------

// Exercícios de escrita de código


// exercicio 04:     

// const idade = Number(prompt("Digite a sua idade:"));

// if(idade >= 18){
//     console.log("Você pode dirigir")
// }else{
//     console.log("Você não pode dirigir.")
// }


//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------


// exercicio 05:     

// const turno  = prompt("Em qual turno você estuda? Digite M para manhã, V para vespertino, ou N para noturno").toLocaleLowerCase();

// utilizando o if e else

// if(turno === "m"){
//     console.log("Bom dia!")
// }
//  else if(turno === "v"){
//     console.log("Boa tarde!")
// }
//  else if(turno === "n"){
//     console.log("Boa noite!")
// } else{
//     console.log("Turno inválido!")
// }

// utilizando switch e case

// switch (turno){
//      case "m":
//         console.log("Bom dia!");
//         break;

//     case "v":
//         console.log("Boa tarde!");
//         break;

//     case "n":
//         console.log("Boa noite!")
//         break;

//     default:
//         console.log("Turno inválido!")
//         break;
         
// }


//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------


// exercicio 06:   

// const filme = prompt("Qual gênero de filme vai assistir? ").toLocaleLowerCase();
// const preco = Number(prompt("Qual o valor do ingresso?"))

// if(filme === "fantasia" && preco < 15){
//     console.log("Bom filme!")
// }else{
//     console.log("Escolha outro filme!")
// }