function calcularFatorial(numero) {
  let fatorial = 1;
  let numeros = ""; // Variável para armazenar os números do fatorial

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
    numeros += i;
    if (i !== numero) {
      numeros += " * ";
    }
  }
  
  return {
    resultado: fatorial,
    numeros: numeros
  };
}

function verificarFatorial() {
  const inputNumero = document.getElementById('numero');
  const numero = parseInt(inputNumero.value);

  const { resultado, numeros } = calcularFatorial(numero);

  const resultadoElemento = document.getElementById('resultado');
  resultadoElemento.textContent = `O fatorial de ${numero} é ${numeros} = ${resultado}.`;
}