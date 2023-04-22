import criaCard from "./criaCard.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Captura inputs
    const url = document.querySelector('[data-input="url"').value;
    const category = document.querySelector('[data-input="category"').value;
    const productName = document.querySelector('[data-input="name"').value;
    const price = document.querySelector('[data-input="price"').value;
    const description = document.querySelector('[data-input="description"').value;

    // captura cards container
    let cardsContainer = document.querySelector('[data-list="cards"')


    const card = criaCard(url, category, productName, price, description)

    cardsContainer.appendChild(card)

    // Limpando inputs
    document.querySelector('[data-input="url"').value = " "
    document.querySelector('[data-input="category"').value = " "
    document.querySelector('[data-input="name"').value = " "
    document.querySelector('[data-input="price"').value = " "
    document.querySelector('[data-input="description"').value = " "
})
