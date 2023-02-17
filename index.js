const resposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputpergunta")
const respostas = [
  "Não",
  "Provavelmente",
  "Sim",
  "Com toda certeza!",
  "Pergunte novamente mais tarde",
  "As vozes da minha cabeça dizem que sim",
  "As vozes da minha cabeça dizem que não",
  "Foque para fazer sua pergunta",
]

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

   const pergunta ="<div>" + inputPergunta.value +
   "</div>"


// gerar numero aleatorio
const totalRespostas = respostas.length
const numeroRandom = Math.floor(Math.random() * totalRespostas)

console.log(respostas[numeroRandom])
resposta.innerHTML = pergunta + respostas[numeroRandom]

resposta.style.opacity = 1;

// sumir a resposta depois de 4 segundos
setTimeout(function() {
  resposta.style.opacity = 0;
}, 4000)
}