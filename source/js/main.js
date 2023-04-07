const $cards = document.querySelectorAll('[data-card]');

$cards.forEach(card => {
    card.addEventListener('click', (e) => {
        const parentElement = e.target.parentNode
        const elementTarget = parentElement.parentNode

        elementTarget.classList.toggle("fliper")

    })
})