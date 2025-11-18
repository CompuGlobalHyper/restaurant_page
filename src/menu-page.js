const menuPage = () => {
    const menuItems = {
        'Honey Circles': 'Circular shaped processed oats dipped in an organic aritificial honey solution.',
        'Sugar Flakes': 'Heirloom corn flakes tossed in monk fruit frosting.',
        'Puffed Cacao': 'For the chocolate lovers, ethically sourced of course!',
        'Berry Rings': 'Hand made rings flavored and dyed with small farm grown fruits.'
    }
    const content = document.getElementById('content')
    for (let cereal in menuItems) {
        let itemBubble = document.createElement('div')
        itemBubble.classList.add('content-bubble')
        
        let itemTitle = document.createElement('h3')
        itemTitle.textContent = (`${cereal}`)
        itemTitle.style.alignSelf = 'flex-start'

        let imgBubble = document.createElement('div')
        imgBubble.classList.add('img-bubble')
        imgBubble.style.alignSelf = 'center'

        let itemDescrip = document.createElement('p')
        itemDescrip.textContent = (`${menuItems[cereal]}`)
        itemDescrip.style.alignSelf = 'flex-start'

        itemBubble.appendChild(itemTitle)
        itemBubble.appendChild(imgBubble)
        itemBubble.appendChild(itemDescrip)

        content.appendChild(itemBubble)
    }
}

export { menuPage }