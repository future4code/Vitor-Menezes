/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


 

console.log("bem vindo ao BlackJack!");

const respostaUser = confirm("Deseja iniciar uma nova rodada?");

if(respostaUser == true){

   const arrayUser = [];
   const arrayPc = [];
   
   
   for(let i = 0; i < 2; i++){
      arrayUser.push(comprarCarta());
      arrayPc.push(comprarCarta());
      
   }

   let totalUser = 0;
   let totalPc = 0;

   for(let i = 0; i < 2; i++){
      totalUser += arrayUser[i].valor
      totalPc += arrayPc[i].valor
   }

   

   console.log(`Usuário - cartas: ${arrayUser[0].texto} ${arrayUser[1].texto} - pontuação ${totalUser}`);
   console.log(`Computador - cartas: ${arrayPc[0].texto} ${arrayPc[1].texto} - pontuação ${totalPc}`);



   if(totalUser > totalPc){
      console.log("O usuário ganhou!")
   }else if(totalUser < totalPc){
      console.log("O computador ganhou!")
   } else{
      console.log("Empate!")
   }

   

} else {
   console.log("O jogo acabaou!")
}


