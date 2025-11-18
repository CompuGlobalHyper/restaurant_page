import "./styles.css"
import { homePage } from "./home-page.js"
import { menuPage } from "./menu-page.js"
import { aboutPage } from "./about-page.js"
import  cerealHeader  from "./cereal_header.jpg"
import cerealBackground from "./cereal-background.jpg"


const header = document.querySelector('#cereal-banner')
header.style.backgroundImage = `url(${cerealHeader})`
document.documentElement.style.setProperty('--body-bg', `url(${cerealBackground})`)


homePage()

const container = document.querySelector('#content')
const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu')
const aboutButton = document.querySelector('#about')

homeButton.addEventListener('click', () => {
    container.replaceChildren();
    homePage()
})

menuButton.addEventListener('click', () => {
    container.replaceChildren();
    menuPage()
})

aboutButton.addEventListener('click', () => {
    container.replaceChildren();
    aboutPage()
})

console.log('Javascript is running...')