
//navbar
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

// sofa-color-filter
const color__circle = document.querySelectorAll('.color__box .color__box__border .circle')
const sofa_images = document.querySelectorAll('.sofas__desktop img')
const sofas =
{
    green: ['./assets/images/sofas/green-1.png', './assets/images/sofas/green-2.png', './assets/images/sofas/green-3.png', './assets/images/sofas/green-1.png', './assets/images/sofas/green-3.png'],
    blue: ['./assets/images/sofas/blue-1.png', './assets/images/sofas/blue-2.png', './assets/images/sofas/blue-3.png', './assets/images/sofas/blue-1.png', './assets/images/sofas/blue-3.png'],
    grey: ['./assets/images/sofas/grey-1.png', './assets/images/sofas/grey-2.png', './assets/images/sofas/grey-3.png', './assets/images/sofas/grey-1.png', './assets/images/sofas/grey-3.png'],
    white: ['./assets/images/sofas/white-1.png', './assets/images/sofas/white-2.png', './assets/images/sofas/white-3.png', './assets/images/sofas/white-1.png', './assets/images/sofas/white-3.png']
}
const clickedColorFilter = (event) =>{
    // assign border
    Array.from(event.target.parentElement.parentElement.children).forEach(border_div=>{
        border_div.style.border = '2px solid transparent'
    })
    let boderColor = event.target.parentElement.dataset.borderColor
    event.target.parentElement.style.border = `2px solid ${boderColor}`

    // assign images
    
    Array.from(sofa_images).forEach((img, index)=>{
        img.src = sofas[event.target.dataset.color][index]
    })
    document.querySelectorAll('.sofas__mobile img').forEach((img, index)=>{
        img.src = sofas[event.target.dataset.color][index]
    })
}
Array.from(color__circle).forEach(circle=>{
    circle.addEventListener('click', clickedColorFilter)
})

// mobile sofa-slider
const sofa_slider = document.querySelector('.sofas__mobile')
const sofa_slider_figures = sofa_slider.querySelectorAll('figure')
const sofa_slider_images = sofa_slider.querySelectorAll('img')
const btns = document.querySelectorAll('.btn')
let counter = 1

const manualNav = (manual) =>{
    sofa_slider_figures.forEach(slide=>{
        slide.classList.remove('active')
    })
    btns.forEach(btn=>{
        btn.classList.remove('active')
    })
    sofa_slider_figures[manual].classList.add('active')
    btns[manual].classList.add('active')
}
Array.from(btns).forEach((btn, index)=>{
    btn.addEventListener('click', ()=>{
        manualNav(index)
        counter = index
    })
})

// submit email
const subscribe_button = document.getElementById('submit-email')
const clickedSubscribe = (event) =>{
    event.preventDefault()
}
subscribe_button.addEventListener('submit', clickedSubscribe)

// scroll-top

const scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll',()=>{
    if(window.scrollY > 100){
        scrollTop.classList.add('active')
    }
    else{
        scrollTop.classList.remove('active')
    }
})

scrollTop.addEventListener('click',()=>{
    window.scrollTo(0,0)
})