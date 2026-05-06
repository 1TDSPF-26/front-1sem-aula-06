
/*chamando o botão do html*/
const botaoEntrar = document.getElementById("btnEntrar");

//adicionando uma ação ao botão
//utilizando a função addEventListener como perceptora de ações 
//vamos utilizar o evento click, no JS usar apenas click; no html usar onclick

/*a função addEventListener(param1, param2) recebe 2 parâmetros,
o primeiro é o evento a ser realizado, e o  segundo é a função anônima ou de callback.*/
botaoEntrar.addEventListener("click", function(){
    console.log("Botão Ativo!");
} );

