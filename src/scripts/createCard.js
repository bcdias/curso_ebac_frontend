function createCard(url, category, name, price, description) {
    
    const card = document.createElement("div")
    card.classList.add("product")
    card.dataset.category = `${category}`

    // Criando tag img
    const productUrl = document.createElement("img")
    productUrl.classList.add('product-img')
    productUrl.src = `${url}`

    // Criando tag h4
    const productName = document.createElement("h4")
    productName.classList.add('product-name')
    productName.innerText = `${name}`

    // Criando tag span
    const productPrice = document.createElement("span")
    productPrice.classList.add('product-price')
    productPrice.innerText = `${price}`

    // Criando tag p
    const productDescription = document.createElement("p")
    productDescription.classList.add('product-description')
    productDescription.innerText = `${description}`


    // Adicionando tags
    card.appendChild(productUrl)
    card.appendChild(productName)
    card.appendChild(productPrice)
    card.appendChild(productDescription)



    return card
}

export default createCard