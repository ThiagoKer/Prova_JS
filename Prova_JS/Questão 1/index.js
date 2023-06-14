function verificarPrimo(numero) {
    if (numero < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function listarPrimos() {
    let primos = [];
    
    for (let i = 0; i <= 1000; i++) {
      if (verificarPrimo(i)) {
        primos.push(i);
      }
    }
    
    return primos;
  }
  
  function verificarEListarPrimos() {
    let inputNumero = document.getElementById("inputNumero");
    let numero = parseInt(inputNumero.value);
    
    let isPrimo = verificarPrimo(numero);
    let primos = listarPrimos();
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O número ${numero} ${isPrimo ? 'é primo' : 'não é primo'}.`;
  
    let primosList = document.getElementById("primosList");
    primosList.innerHTML = 'Números primos de 1 a 1000: ' + primos.join(', ');
  }
  
  document.getElementById("btnVerificar").addEventListener("click", verificarEListarPrimos);
  