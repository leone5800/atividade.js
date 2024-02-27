
const senhaInput = document.getElementById("senha");
const validarBotao = document.getElementById("validar");
const resultado = document.getElementById("resultado");

validarBotao.addEventListener("click", validarSenha);


function validarSenha() {
    const senha = senhaInput.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.test(senha)) {
        resultado.textContent = "Senha válida.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Senha inválida seu pobre tente denovo. A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais. ouviu pobre muhah";
        resultado.style.color = "red";
    }
}