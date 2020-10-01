// Exercícios de interpretação de código

// EXERCÍCIO 1

        // resposta:    10


// EXERCÍCIO 2

        // resposta: 
                // a -     19
                        // 21
                        // 23
                        // 25
                        // 27
                        // 30

                // b - basta remover o o if para exbir cada indice do array
                        // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
                        // for (let numero of lista) {
                        //         console.log(numero)
                        // }

//   DESAFIO 1         

    // RESPOSTA:    0
                //  00
                //  000
                //  0000


//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

// Exercícios de escrita de código


// EXERCÍCIO 3

//RESPOSTA  a.
const arrayOriginal = [20, 35, 10, 38, 77, 66, 99, 11, 69, 13];

for (let i of arrayOriginal ){
    console.log(i);
}


console.log('\n\n')



//----------------------------------------------------
//----------------------------------------------------
//----------------------------------------------------



//RESPOSTA  b. 
const arrayOriginal2 = [20, 35, 10, 38, 77, 66, 99, 11, 69, 13];

for (let i of arrayOriginal2 ){
    console.log(i / 10);
}


console.log('\n\n')



//----------------------------------------------------
//----------------------------------------------------
//----------------------------------------------------



// RESPOSTA c. 
const arrayOriginal3 = [20, 35, 10, 38, 77, 66, 99, 11, 69, 13];
const newArray = [];

for (let i of arrayOriginal3 ){
    if(i % 2 === 0){
        newArray.push(i)
    }
}
console.log(newArray);


console.log('\n\n')



//----------------------------------------------------
//----------------------------------------------------
//----------------------------------------------------



// RESPOSTA d.

const arrayOriginal4 = [20, 35, 10, 38, 77, 66, 99, 11, 69, 13];
const newArrayString = [];

for (let i = 0; i < arrayOriginal4.length; i++ ){
    
        newArrayString.push(`o elemento do index ${i} é: ${arrayOriginal4[i]}`)
    
}
console.log(newArrayString);


console.log('\n\n')



//----------------------------------------------------
//----------------------------------------------------
//----------------------------------------------------



// RESPOSTA e.
const arrayOriginal5 = [20, 35, 10, 38, 77, 66, 99, 11, 69, 13];
let valorMaximo = arrayOriginal5[0];
let valorMinimo = arrayOriginal5[0];


for (let i = 0; i < arrayOriginal5.length; i++){

    if(arrayOriginal5[i] > valorMaximo){
        valorMaximo = arrayOriginal5[i];
    }
    if(arrayOriginal5[i] < valorMinimo){
        valorMinimo = arrayOriginal5[i];
    }
}

console.log(valorMaximo);
console.log(valorMinimo);