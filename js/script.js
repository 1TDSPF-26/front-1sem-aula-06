//forma correta de utilizar java script
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
//addEventListener é o método que utilizamos para adicionar um evento de ação a um elemento do html
//o método addEventListener recebe como parâmetro o tipo de evento que queremos adicionar e a função que será executada quando o evento ocorrer
//click é o tipo de evento que queremos adicionar, ou seja, quando o usuário clicar no botão de entrar