
const usuario={
    email:"teste@teste.com",
    senha: "12345",
    nome: "Alercio",
    avatar: "https://placehold.co/600x500/afa9fe/ffffff.png?text=oi&font=montserrat"
}



const botaoEntrar = document.getElementById("btnEntrar");

//Atrelando um evento de ação ao botão capturado
//Utilizamos a função addEventListener como perceptora(escutador de eventos) ao botão, o evento vai ser o click.
//Este evento quando usado no HTML utilizamos o prefixo ON, mas aqui no JS, não utilizamos, então ao invés de usar onclick, usamos apenas click.
//A função addEventListener(param1,param2), recebe dois parâmetros, o primeiro é o evento que se espera, o segundo é uma função anônima ou de callBack.
botaoEntrar.addEventListener("click", function(){
    
    

    //Recupere aqui o campo email:
    const email=document.getElementById("idEmail");

    //Recupere aqui o campo senha:
    const senha = document.getElementById("idSenha");

    //Imprimir no console log ambos os dados dos campos:
    console.log(email.value);
    console.log(senha.value);

    //const usuario ={
    //    email: email.value,
    //    senha: senha.value
    //}

    //setTimeout(function(){
     //   alert("Dado enviado!");
     //   document.getElementsByTagName("form")[0].submit();
    //},5000);

    try {
        
        if(!usuario === null){
            if( (usuario.email === email.value) && (usuario.senha === senha.value) ){
                alert("Login realizado com sucesso!");
            }else{
                throw new Error("Email ou Senha incorretos!")
            }
        }
        
    } catch (error) {
        console.error(error);
        alert(error);
    }
});