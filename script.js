let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let botao = document.getElementById("botao");
let mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
    let nomeDigitado = nome.value;
    let idadeDigitada = idade.value;

    if (nomeDigitado == "" || idadeDigitada == "") {
        mensagem.textContent = "Preencha todos os campos antes de continuar.";
    }

    else if (idadeDigitada < 18) {
        mensagem.textContent = "É necessária autorização de um responsável.";
    }

    else if (idadeDigitada >= 18) {
        mensagem.textContent = `Inscrição realizada com sucesso, ${nomeDigitado}!`;
    }
});