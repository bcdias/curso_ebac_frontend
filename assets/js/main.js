import verificaMaior from "./verificacao.js"
import enviaMensagem from "./enviaMensagem.js"
import remoNotificacao from "./removeNotificacao.js"


const inputA = document.querySelector('#A')
const inputB = document.querySelector('#B')
const botao = document.querySelector('[data-botao]')
const notificacao = document.querySelector('.container__notificacao')

//removendo notificação
inputB.addEventListener('click', () => {
    remoNotificacao(notificacao)
})
inputA.addEventListener('click', () => {
    remoNotificacao(notificacao)
})


//Validando formulário e notificando usuário
botao.addEventListener('click', (e) => {

    e.preventDefault()

    //convertendo em inteiro
    const valorA = parseInt(inputA.value)
    const valorB = parseInt(inputB.value)

    //verificando se B é maior que A
    const ehMaior = verificaMaior(valorA, valorB)

    //inserindo notificação
    enviaMensagem(ehMaior, notificacao)

})