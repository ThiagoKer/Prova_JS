function verificarQuadradoPerfeito() {
    const inputNumero = document.getElementById('numero');
    const numero = parseInt(inputNumero.value);
  
    const { quadradoPerfeito, raiz } = éQuadradoPerfeito(numero);
  
    const resultadoElemento = document.getElementById('resultado');
    if (quadradoPerfeito) {
      resultadoElemento.textContent = `${numero} é um quadrado perfeito. Sua raiz é ${raiz}.`;
    } else {
      resultadoElemento.textContent = `${numero} não é um quadrado perfeito.`;
    }
  }
  
  function éQuadradoPerfeito(numero) {
    if (numero < 0) {
      return {
        quadradoPerfeito: false,
        raiz: null
      };
    }
  
    const raiz = Math.sqrt(numero);
    const éInteiro = raiz % 1 === 0;
  
    return {
      quadradoPerfeito: éInteiro,
      raiz: éInteiro ? raiz : null
    };
  }