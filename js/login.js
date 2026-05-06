
const botaoEntrar = document.getElementById("btnEntrar");
var sair = false




botaoEntrar.addEventListener("click", function () {
    while (sair = false) {
        if ((campoEmail in emails) && (campoSenha in senhas)) {
            console.log('Logado com sucesso')
            sair = true
        }
        else{
            console.log('Usuario Invalido')
        }

    }
});