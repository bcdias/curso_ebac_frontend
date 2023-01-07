
export default function enviaMensagem(ehMaior, elemento){

    if(ehMaior) {

        elemento.innerHTML = `<p class="notificacao sucesso">${mensagem.positiva}</p>`

    }else {

        elemento.innerHTML = `<p class="notificacao falha"> ${mensagem.negativa}</p>`

    }
}

const mensagem = {
    positiva: 'Validação aprovada.',
    negativa: 'Validação não aprovada.'
}