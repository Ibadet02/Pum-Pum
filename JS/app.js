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