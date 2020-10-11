
function criaTarefa (){

    const InputTarefa = document.querySelector("#tarefa");
    const InputDias = document.querySelector("#dias-semana");
    
    const insereTarefa = document.querySelector(`#${InputDias.value}`);
    
    insereTarefa.innerHTML += `<ul><li>${InputTarefa.value}</li></ul>` 
    
    esvaziaInput();
    
}



function esvaziaInput () {
    const InputTarefa = document.querySelector("#tarefa");
    InputTarefa.value = '';

}


