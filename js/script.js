//Usúario local
// const usuario = {
//     email   : "email@email.com",
//     senha   : "12345",
//     nome    : "José das Couve",
//     avatar  : "https://placehold.co/100x100/d1d5db/111827.png?text=Mobile%20Preview&font=inter"
// }

const usuarios = [
  {
    email: "lucas.bossi@email.com",
    senha: "123",
    nome: "Lucas Bossi Cruz",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Lucas&font=inter",
  },
  {
    email: "email@email.com",
    senha: "12345",
    nome: "José das Couves",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Theo&font=inter",
  },
  {
    email: "ana.silva@email.com",
    senha: "789",
    nome: "Ana Silva",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Ana&font=inter",
  },
  {
    email: "carlos.oliveira@email.com",
    senha: "abc",
    nome: "Carlos Oliveira",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Carlos&font=inter",
  },
  {
    email: "mariana.santos@email.com",
    senha: "def",
    nome: "Mariana Santos",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Mariana&font=inter",
  },
  {
    email: "roberto.lima@email.com",
    senha: "ghi",
    nome: "Roberto Lima",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Roberto&font=inter",
  },
  {
    email: "julia.ferreira@email.com",
    senha: "jkl",
    nome: "Julia Ferreira",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Julia&font=inter",
  },
  {
    email: "fernando.souza@email.com",
    senha: "mno",
    nome: "Fernando Souza",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Fernando&font=inter",
  },
  {
    email: "patricia.costa@email.com",
    senha: "pqr",
    nome: "Patricia Costa",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Patricia&font=inter",
  },
  {
    email: "ricardo.mendes@email.com",
    senha: "stu",
    nome: "Ricardo Mendes",
    avatar:
      "https://placehold.co/100x100/d1d5db/111827.png?text=Ricardo&font=inter",
  },
];

const botaoEntrar = document.getElementById("btnEntrar");

//Atrelando um evento de ação ao botão capturado
//Utilizamos a função addEventListener como perceptora(escutador de eventos) ao botão, o evento vai ser o click.
//Este evento quando usado no HTML utilizamos o prefixo ON, mas aqui no JS, não utilizamos, então ao invés de usar onclick, usamos apenas click.
//A função addEventListener(param1,param2), recebe dois parâmetros, o primeiro é o evento que se espera, o segundo é uma função anônima ou de callBack.
botaoEntrar.addEventListener("click", function (evento) {
  evento.preventDefault();

  //Recupere aqui o campo email:
  const email = document.getElementById("idEmail");

  //Recupere aqui o campo senha:
  const senha = document.getElementById("idSenha");

  //Imprimir no console log ambos os dados dos campos:
  console.log(email.value);
  console.log(senha.value);

  try {
    if (usuarios !== null) {
      for (let x = 0; x < usuarios.length; x++) {
        
        if (usuarios[x].email === email.value && usuarios[x].senha === senha.value) {
          //Recuperando a janela de dialog
          const modalDialog = document.getElementById("meu-modal");
          //Abrindo a janela modal
          // modalDialog.show();
          modalDialog.showModal();

          //Atrelando a função de fechamento do modal ao botão existente nele mesmo!
          const botaoFecharModal = document.getElementById("fechar-modal");
          botaoFecharModal.addEventListener("click", function () {
            modalDialog.close();
          });

          //Gerando um contador de tempo para o redirect com setInterval()!
          let contador = 5;

          const divMsg = document.getElementById("msg");
          divMsg.innerHTML = `<p class='login-sucesso'>Login realizado com sucesso!</p><p class='login-sucesso'>Você será redirecionado em ${contador} segundos!</p>`;

          const intervalo = setInterval(() => {
            contador--;
            divMsg.innerHTML = `<p class='login-sucesso'>Login realizado com sucesso!</p><p class='login-sucesso'>Você será redirecionado em ${contador} segundos!</p>`;

            if (contador === 0) {
              clearInterval(intervalo);
              window.location.href = "../index.html";
            }
          }, 1000);
        } else {
          throw new Error("Email ou Senha incorretos!");
          //Para casa
          //Reutilizar o modal para apresentar a mensagem de erro do login!
          //Melhorar a resposta para o usuário no modal.

        }
      }
    }
  } catch (error) {
    console.error(error);
    alert(error);
  }

});
