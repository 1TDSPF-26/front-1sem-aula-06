//Dom(Document object model) é o modo que usamos o javascript para manipular o HTML.
//exemplo de como acessar um elemento do html utilizando o DOM
//para acessar um elemento do html utilizamos o método getElementById
//o método getElementById recebe como parâmetro o id do elemento que queremos acessar
//const para o elemento do html que queremos acessar
// decçaração da constante para o elemento do html que queremos acessar
//document é o objeto que representa o documento html
//getElementById é o método que utilizamos para acessar um elemento do html
//botaoEntrar é a constante que representa o elemento do html com id "botao-entrar"

//usuario local:
const usuario = {
    email:"email@email.com",
    senha: "12345",
    nome: "Razo",
    avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"

}




const botaoEntrar = document.getElementById("btnEntrar");

//Atrelando um evento de ação ao botão capturado
//Utilizamos a função addEventListener como perceptora(escutador de eventos) ao botão, o evento vai ser o click.
//Este evento quando usado no HTML utilizamos o prefixo ON, mas aqui no JS, não utilizamos, então ao invés de usar onclick, usamos apenas click.
//A função addEventListener(param1,param2), recebe dois parâmetros, o primeiro é o evento que se espera, o segundo é uma função anônima ou de callBack.
botaoEntrar.addEventListener("click", function(evento){
     
        evento.preventDefault();

    //Recupere aqui o campo email:
    const email = document.getElementById("idEmail");
    
    //Recupere aqui o campo senha:
    const senha = document.getElementById("idSenha");

    //Imprimir no console log ambos os dados dos campos:
    console.log(email.value);
    console.log(senha.value);

    //Declarar um objeto e inserir os dados dos campos:
    //const usuario = {
        //email: email.value,
        //senha: senha.value
    //}

    setTimeout(function(){
        alert("Dado enviado!");
         document.getElementsByTagName("form")[0].submit();
    },5000);


try {
    
    if(usuario !== null){
        console.log
        if((usuario.email === email.value)  && (usuario.senha === senha.value)){
            //Recuperando a janela de dialog
            const modalDialog = document.getElementById("meu-modal");
            //Abrindo a janela modal
            modalDialog.showModal();
            //Atrelando a função de fechamento do modal ao botão existente nele mesmo!
            const botaoFecharModal = document.getElementById("fechar-modal");
                botaoFecharModal.addEventListener("click", function(){
                    modalDialog.close();
                });
                
        }else{
            throw new Error("Email ou senha incorretos!")
        }
    }

} catch (error) {
    console.error(error);
    alert(error);
    
}

    // //Fazer uma validação de email e senha, se estiverem preenchidos, então mostrar o alerta "Bem vindo ao sistema.
    // if (email.value && senha.value) {
    //     const modal = document.getElementById("modal-login");
    //     const closeModal = document.getElementsByClassName("modal__close")[0];
    //     modal.showModal();
    //     closeModal.addEventListener("click", function(){
    //         modal.close();
    //     })
    
    // }


});