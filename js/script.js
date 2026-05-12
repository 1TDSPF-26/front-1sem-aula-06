/* //forma correta de utilizar java script
//java scrip é utilizado para manipular o html e o css
//para isso utilizamos o DOM (Document Object Model)

//DOM é uma representação do documento html em forma de árvore

//cada elemento do html é representado por um nó da árvore

//para acessar os elementos do html utilizamos os métodos do DOM

//exemplo de como acessar um elemento do html utilizando o DOM
//para acessar um elemento do html utilizamos o método getElementById
//o método getElementById recebe como parâmetro o id do elemento que queremos acessar
//const para o elemento do html que queremos acessar
// decçaração da constante para o elemento do html que queremos acessar
//document é o objeto que representa o documento html
//getElementById é o método que utilizamos para acessar um elemento do html
//botaoEntrar é a constante que representa o elemento do html com id "btnEntrar"
const botaoEntrar = document.getElementById('btnEntrar');

//Atrelando evendo de ação ao botão de entrar
//addEventListener adicionando (add) event(eventos) listener(escutador)é o método que utiliza para adicionar um evento de ação a um elemento do html
//o método addEventListener recebe como parâmetro o tipo de evento que queremos adicionar e a função que será executada quando o evento ocorrer
//click é o tipo de evento que queremos adicionar, ou seja, quando o usuário clicar no botão de entrar

//recebe 2 parametros, o primeiro é o tipo de evento, no caso "click", e o segundo é a função que será executada quando o evento ocorrer
botaoEntrar.addEventListener('click', function(){
    //função click é a função que será executada quando o usuário clicar no botão de entrar
    // Código vai ser executado quando o botão for clicado
    console.log("Botão ativo!");
}); --> 

var nome = "João"; var é uma variável de escopo global, ou seja, pode ser acessada em qualquer parte do código

let cidade = "São Paulo"; o let é uma variável de escopo local, ou seja, só pode ser acessada dentro do bloco 
onde foi declarada

const PI = 3.14; const é uma variável de escopo global, ou seja, pode ser acessada em qualquer parte do código,
 e seu valor não pode ser alterado

*/

const botaoEntrar = document.getElementById("btnEntrar");

//Atrelando um evento de ação ao botão capturado
//Utilizamos a função addEventListener como perceptora(escutador de eventos) ao botão, o evento vai ser o click.
//Este evento quando usado no HTML utilizamos o prefixo ON, mas aqui no JS, não utilizamos, então ao invés de usar onclick, usamos apenas click.
//A função addEventListener(param1,param2), recebe dois parâmetros, o primeiro é o evento que se espera, o segundo é uma função anônima ou de callBack.
botaoEntrar.addEventListener("click", function () {
  //Recupere aqui o campo email:
  const email = document.getElementById("idEmail");

  //Recupere aqui o campo senha:
  const senha = document.getElementById("idSenha");

  //Imprimir no console log ambos os dados dos campos:
  console.log(email.value);
  console.log(senha.value);

  //Declarar um objeto e inserir os dados dos campos:
  const usuario = {
    email: email.value,
    senha: senha.value,
  };

  //Fazer uma validação de email e senha, se estiverem preenchidos, então mostrar o alerta "Bem vindo ao sistema.
  if (email.value && senha.value) {
    const modal = document.getElementById("modal-login");
    const closeModal = document.getElementsByClassName("modal__close")[0];
    modal.showModal();
    closeModal.addEventListener("click", function () {
      modal.close();
    });
  }
});
