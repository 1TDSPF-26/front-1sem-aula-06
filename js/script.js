
//Ususario local
// const usuario = {
//     email: "email@email.com",
//     senha: "12345",
//     nome: "Alexandre",
//     avatar: "https://placehold.co/100x100/cccccc/969696.png?text=Mobile&font=inter"
// }


//adicionando lista de usuarios
const usuarios = [
    {
    email: "lucas.bossi@email.com",
    senha: "123",
    nome: "Lucas Bossi Cruz",
    avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Lucas&font=inter"
    },
    {
    email: "email@email.com",
    senha: "12345",
    nome: "Jose das Couves",
    avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Theo&font=inter"
    },
    {
    email: "ana.silva@email.com",
    senha: "789",
    nome: "Ana Silva",
    avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Ana&font=inter"
    },
    {
    email: "carlos.oliveira@email.com",
    senha: "abc",
    nome: "Carlos Oliveira",
    avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Carlos&font=inter"
    },
    {
    email: "mariana.santos@email.com",
    senha: "def",
    nome: "Mariana Santos",
    avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Mariana&font=inter"
    },
    {
    email: "roberto.lima@email.com",
    senha: "ghi",
    nome: "Roberto Lima",
    avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Roberto&font=inter"
    },
    {
    email: "julia.ferreira@email.com",
    senha: "jkl",
    nome: "Julia Ferreira",
    avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Julia&font=inter"
    },
    {
    email: "fernando.souza@email.com",
    senha: "mno",
    nome: "Fernando Souza",
    avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Fernando&font=inter"
    },
    {
    email: "patricia.costa@email.com",
    senha: "pqr",
    nome: "Patricia Costa",
    avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Patricia&font=inter"
    },
    {
    email: "ricardo.mendes@email.com",
    senha: "stu",
    nome: "Ricardo Mendes",
    avatar: "https://placehold.co/100x100/d1d5db/111827.png?text=Ricardo&font=inter"
    }
];






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



    //utilizando o try{} catch{}
    try{

        if(usuarios !== null){

            for (let x = 0; x < usuarios.length; x++){

                if( (usuarios[x].email === email.value) && (usuarios[x].senha === senha.value) ){
    
                    //recuperando a janela de dialog
                    const modalDialog = document.getElementById("meu_modal");
                    //abrindo a janela modal (pop-up)
                    modalDialog.showModal();
    
                    //atribuindo botão para fechar modal
                    const botaoFecharModal = document.getElementById("fechar_modal");
                    botaoFecharModal.addEventListener("click", function(){
                        modalDialog.close();
                    });
    
                    //gerando um contador de tempo para o redirect com setInrerval()!
                    let contador = 5;
                    const divMsg = document.getElementById("msg");
    
                    divMsg.innerHTML = `<p class='login_sucesso'>Login realizado com sucesso!</p><p class='login_sucesso'>Você será redirecionado em ${contador} segundos </p>`;
    
                    const intervalo = setInterval( ()=>{
                        contador --;
                        divMsg.innerHTML = `<p class='login_sucesso'>Login realizado com sucesso!</p><p class='login_sucesso'>Você será redirecionado em ${contador} segundos </p>`;
    
                        if(contador === 0){
                            clearInterval(intervalo);
                            window.location.href = "../index.html";
                        }
                    }, 1000);

                    //Utilizando o return para bloquear o seguimento do fluxo da aplicação. Fazendo com que ela retorne para quem a chamou, no caso foi o document, e o fluxo retorna para o escopo central, não chegando até o throw.
                    return;
                    
                }
            }
            
            throw new Error("Email ou senha incorretos!")

        }
    } catch (error) {
        console.error(error);
        alert(error);

    }

} );

