
/*chamando o botão do html*/
const botaoEntrar = document.getElementById("btnEntrar");

//adicionando uma ação ao botão
//utilizando a função addEventListener como perceptora de ações 
//vamos utilizar o evento click, no JS usar apenas click; no html usar onclick

/*a função addEventListener(param1, param2) recebe 2 parâmetros,
o primeiro é o evento a ser realizado, e o  segundo é a função anônima ou de callback.*/
botaoEntrar.addEventListener("click", function(){
    
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
        senha: senha.value
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
} );

