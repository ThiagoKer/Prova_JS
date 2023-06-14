function verificarSenha(senha) {
    // Verificar o comprimento mínimo da senha
    if (senha.length < 8) {
      return false;
    }
  
    // Verificar se contém pelo menos uma letra maiúscula, uma letra minúscula e um número
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
  
    for (let i = 0; i < senha.length; i++) {
      let char = senha.charAt(i);
  
      if (char >= 'A' && char <= 'Z') {
        hasUppercase = true;
      } else if (char >= 'a' && char <= 'z') {
        hasLowercase = true;
      } else if (!isNaN(char)) {
        hasNumber = true;
      }
  
      // Se todos os critérios forem atendidos, retornar true
      if (hasUppercase && hasLowercase && hasNumber) {
        return true;
      }
    }
  
    return false;
  }
  
  // Exemplo de uso
 
  let senhaValida = verificarSenha(senha);
  
  if (senhaValida) {
    alert("A senha é válida!");
  } else {
    alert("A senha não atende aos critérios!");
  }
  