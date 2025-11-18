const aboutPage = () => {
    const contacts = [{name: 'Joe', title: 'Manager', 
                       number: '(555) 555 - 5555', email: 'joesrealemail@email.com'},
                      {name: 'Shmoe', title: 'Asst Manager', 
                       number: '(555) 555 - 5555', email: 'shmoesrealemail@email.com'},
                      {name: 'Bob', title: 'Employee', 
                       number: '(555) 555 - 5555', email: 'bobsjunkemail@email.com'}]

    const content = document.getElementById('content')
    for (let contact of contacts) {
        let contactBubble = document.createElement('div')
        contactBubble.classList.add('content-bubble')

        let contactName = document.createElement('h3')
        contactName.classList.add('contact')
        contactName.textContent = contact.name
        contactBubble.appendChild(contactName)

        let contactTitle = document.createElement('p')
        contactTitle.classList.add('contact')
        contactTitle.textContent = contact.title
        contactBubble.appendChild(contactTitle)

        let contactNumber = document.createElement('p')
        contactNumber.classList.add('contact')
        contactNumber.textContent = contact.number
        contactBubble.appendChild(contactNumber)

        let contactEmail = document.createElement('p')
        contactEmail.classList.add('contact')
        contactEmail.textContent = contact.email
        contactBubble.appendChild(contactEmail)

        content.appendChild(contactBubble)

    }


}

export { aboutPage }