//Funcao diferenciar letra de vogal e consoanteE

function vogalCons(event){
  event.preventDefault();

  const vogais = "aeiou";
  let letra = document.getElementById("letra").value.toLowerCase();
  let resultado = document.getElementById("resultado");

    if (vogais.includes(letra)) {
    resultado.value = "Vogal";
    }
    
    else {
      resultado.value = "Consoante";
    }
}