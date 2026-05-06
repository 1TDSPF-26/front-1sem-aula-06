//exemplo de como acessar um elemento do html utilizando o DOM
//para acessar um elemento do html utilizamos o método getElementById
//o método getElementById recebe como parâmetro o id do elemento que queremos acessar
//const para o elemento do html que queremos acessar
// decçaração da constante para o elemento do html que queremos acessar
//document é o objeto que representa o documento html
//getElementById é o método que utilizamos para acessar um elemento do html
//botaoEntrar é a constante que representa o elemento do html com id "botao-entrar"

const botaoEntrar = document.getElementById("btnEntrar");

//Atrelando um evento de ação ao botão capturado
//Utilizamos a função addEventListener como perceptora(escutador de eventos) ao botão, o evento vai ser o click.
//Este evento quando usado no HTML utilizamos o prefixo ON, mas aqui no JS, não utilizamos, então ao invés de usar onclick, usamos apenas click.
//A função addEventListener(param1,param2), recebe dois parâmetros, o primeiro é o evento que se espera, o segundo é uma função anônima ou de callBack.
botaoEntrar.addEventListener("click", function(){
    
    //Recupere aqui o campo email:

    //Recupere aqui o campo senha:

    //Imprimir no console log ambos os dados dos campos:


});