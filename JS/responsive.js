const nav__links = document.querySelectorAll('.nav__links__link')
const maintainNav__links = () =>{
    var timeOut = setTimeout(()=>{
        Array.from(nav__links).forEach(link=>{
            link.style.display = 'none'
        })
    }, 401)
    // clearTimeout(timeOut)
    if(window.innerWidth <= 1000){
        // setTimeout(()=>{
        //     Array.from(nav__links).forEach(link=>{
        //         link.style.display = 'none'
        //     })
        // }, 601)
        timeOut
    }
    else{
        clearTimeout(timeOut)
        Array.from(nav__links).forEach(link=>{
            link.style.display = 'inline'
        })
    }
    
}
// const images__fig_proportion = 850/720
// const images__fig = document.querySelectorAll('.images__fig')
// const maintainImages__fig = () =>{
//     Array.from(images__fig).forEach(fig=>{
//         let figWidth = fig.offsetWidth
//         fig.style.height = figWidth * images__fig_proportion + 'px'
//     })
// }

maintainNav__links()
// maintainImages__fig()
window.addEventListener("resize", ()=>{
    maintainNav__links()
    // maintainImages__fig()
})
