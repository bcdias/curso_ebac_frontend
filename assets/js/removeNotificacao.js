export default function remoNotificacao(elemento) {

    if (elemento.childElementCount > 0) {
        const mensagem = elemento.childNodes[0]
        elemento.removeChild(mensagem)
    }
}