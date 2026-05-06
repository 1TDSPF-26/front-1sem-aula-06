const campoEmail = document.getElementById("idEmail");
const campoSenha = document.getElementById("idSenha");
const botaoCadastrar = document.getElementById("btnCadastrar")
const emails = []
const senhas = []
//Atrelando um evento de ação ao botão capturado
//Utilizamos a função addEventListener como perceptora(escutador de eventos) ao botão, o evento vai ser o click.
//Este evento quando usado no HTML utilizamos o prefixo ON, mas aqui no JS, não utilizamos, então ao invés de usar onclick, usamos apenas click.
//A função addEventListener(param1,param2), recebe dois parâmetros, o primeiro é o evento que se espera, o segundo é uma função anônima ou de callBack.



campoEmail.addEventListener("input", function(){
    console.log(idEmail.value);
});
campoSenha.addEventListener("input", function(){
    console.log(campoSenha.value);
});



