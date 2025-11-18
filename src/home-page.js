

const homePage = () => { 
    const content = document.getElementById('content')
    const quoteBubble = document.createElement('div')
    quoteBubble.classList.add('content-bubble')
    const quote = document.createElement('p')
    quote.classList.add('italics')
    const author = document.createElement('h3')
    author.classList.add('author')


    quote.textContent = "'Hollywood's first 'cereal pop-up'... it is... healthy and... a unique... must-see... restaurant.'"
    author.textContent =  "- The Inflatuation"
    

    quoteBubble.appendChild(quote)
    quoteBubble.appendChild(author)
    content.appendChild(quoteBubble)

    const hoursBubble = document.createElement('div')
    hoursBubble.classList.add('content-bubble')
    const hours = document.createElement('h3')
    hours.textContent = "Hours"
    hours.style.textDecoration = 'underline'
    
    

    hoursBubble.appendChild(hours)

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                  'Thursday', 'Friday', 'Saturday']

    for (let day of daysOfWeek) {
        if (day === 'Friday' || day === 'Saturday' || day === 'Sunday') {
            let dayBubble = document.createElement('p')
            dayBubble.textContent = `${day}: 10am - 10pm`
            hoursBubble.appendChild(dayBubble)
        } else {
            let dayBubble = document.createElement('p')
            dayBubble.textContent = `${day}: 6am - 6pm`
            hoursBubble.appendChild(dayBubble)
        }
    }

    content.appendChild(hoursBubble)

    const locationBubble = document.createElement('div')
    locationBubble.classList.add('content-bubble')
    const locationTitle = document.createElement('h3')
    const locationBody = document.createElement('p')
    const locationJoke = document.createElement('p')

    locationTitle.textContent = 'Location:'
    locationBody.textContent = 'Hollywood Bowl, 2301 Highland Ave. Los Angeles, CA 90068'
    locationJoke.textContent = '(The scary tunnel underneath the road on the way to the Bowl.)'
    locationTitle.style.alignSelf = 'flex-start'


    locationBubble.appendChild(locationTitle)
    locationBubble.appendChild(locationBody)
    locationBubble.appendChild(locationJoke)

    content.appendChild(locationBubble)








}   

export { homePage }