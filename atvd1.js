function adicao( n1, n2) {
  soma = n1 + n2
  return soma
}

function subtracao( n1, n2) {
  sub = n1 - n2
  return sub
}

function multiplicacao( n1, n2) {
  mult = n1 * n2
  return mult
}

function divisao( n1, n2) {
  div = n1 / n2
  return div
}

function divisaoPorZero( n1, n2){
 
  if(n1 == 0 || n2 == 0){
    console.log("Não é possivel dividir por 0")
  } else{
    divZero = n1 / n2
    console.log(divZero)
  }
  
}

function par(n1){
  if(n1 % 2 == 0){
    console.log("O numero é par")
  } else{
    console.log("Não é par")
  }
}

function somaIntervalo(n1, n2){
    var soma = 0;
    for( i=n1; i<=n2; i++){
        var soma = soma + i;
    }
    return soma;
}

function factorial(n1){
    var mult = 1 ;
    for(var i = n1; i>0; i--){
        mult = mult * i
    }
    return mult
}

function contarVogais(palavra) {

    var vogais = 'aeiouAEIOU';
    var contador = 0;

    
    for (var i = 0; i < palavra.length; i++) {
        
        if (vogais.indexOf(palavra[i]) !== -1) {
            contador++;
        }
    }

    return contador;
}

console.log(adicao(5,3))
console.log(subtracao(5,3))
console.log(multiplicacao(5,3))
console.log(divisao(15,3))
console.log(divisaoPorZero(15, 0))
console.log(par(6))
console.log(somaIntervalo(7, 10))
console.log(factorial(5))
console.log(contarVogais("jandersooon"))