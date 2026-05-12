
//Ususario local
const usuario = {
    email: "email@email.com",
    senha: "12345",
    nome: "Alexandre",
    avatar: "https://placehold.co/100x100/cccccc/969696.png?text=Mobile&font=inter"
}



/*chamando o botão do html*/
const botaoEntrar = document.getElementById("btnEntrar");

//adicionando uma ação ao botão
//utilizando a função addEventListener como perceptora de ações 
//vamos utilizar o evento click, no JS usar apenas click; no html usar onclick

/*a função addEventListener(param1, param2) recebe 2 parâmetros,
o primeiro é o evento a ser realizado, e o  segundo é a função anônima ou de callback.*/
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
    // const usuario = {
    //     email: email.value,
    //     senha: senha.value
    // }


    // setTimeout (function(){
    //     alert("Dado enviado!");
    //     document.getElementsByTagName("form")[0].submit();
    // },5000);


    //utilizando o try{} catch{}
    try{
        if(usuario !== null){
            if( (usuario.email === email.value) && (usuario.senha === senha.value) ){
                alert("Login realizado com sucesso");
            }
            else{
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
} );

