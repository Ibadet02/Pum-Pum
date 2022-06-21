const clickedNav = 'menu-nav-clicked'
const mobile__nav = document.querySelector('.mobile__nav')
const menu_bar = document.querySelector('.menu-bar')
const openMobile__nav = () =>{
    menu_bar.addEventListener('click', ()=>{
        menu_bar.classList.toggle(clickedNav)
        mobile__nav.classList.toggle(clickedNav)
    })
}
openMobile__nav()

const color__circle = document.querySelectorAll('.color__box .color__box__border .circle')
const sofa_images = document.querySelectorAll('.sofas img')
const sofas =
{
    green: ['./assets/images/sofas/green-1.png', './assets/images/sofas/green-2.png', './assets/images/sofas/green-3.png', './assets/images/sofas/green-1.png', './assets/images/sofas/green-3.png'],
    blue: ['./assets/images/sofas/blue-1.jpg', './assets/images/sofas/blue-2.jpeg', './assets/images/sofas/blue-3.jpeg', './assets/images/sofas/blue-1.jpg', './assets/images/sofas/blue-3.jpeg'],
    grey: ['./assets/images/sofas/grey-1.jpg', './assets/images/sofas/grey-2.avif', './assets/images/sofas/grey-3.jpg', './assets/images/sofas/grey-1.jpg', './assets/images/sofas/grey-3.jpg'],
    white: ['./assets/images/sofas/white-1.jpg', './assets/images/sofas/white-2.jpg', './assets/images/sofas/white-3.jpg', './assets/images/sofas/white-1.jpg', './assets/images/sofas/white-3.jpg']
}
const clickedColorFilter = (event) =>{
    // assign border
    Array.from(event.target.parentElement.parentElement.children).forEach(border_div=>{
        border_div.style.border = '2px solid transparent'
    })
    let boderColor = event.target.parentElement.dataset.borderColor
    event.target.parentElement.style.border = `2px solid ${boderColor}`

    // assign images
    console.log(event.target.dataset.color)
    Array.from(sofa_images).forEach((img, index)=>{
        img.src = sofas[event.target.dataset.color][index]
    })
}
Array.from(color__circle).forEach(circle=>{
    circle.addEventListener('click', clickedColorFilter)
})

// submit email
const subscribe_button = document.getElementById('submit-email')
const clickedSubscribe = (event) =>{
    event.preventDefault()
}
subscribe_button.addEventListener('submit', clickedSubscribe)

// draggable slide

const slideWrapper = document.querySelector('.companies')
const innerSlideWrapper = document.querySelector('.companies__inner')

let clicked = false
let startX
let x
var windowWidth = window.innerWidth
slideWrapper.addEventListener('mousedown',(event)=>{
    clicked = true
    startX = event.x
    console.log(startX)
})
window.addEventListener('mouseup', (event)=>{
    clicked = false
})
slideWrapper.addEventListener('mousemove',(event)=>{
    if(!clicked) return
    event.preventDefault()
})