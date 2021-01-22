document.documentElement.addEventListener('mousemove',(e)=>{

    document.documentElement.style.setProperty('--x',e.clientX+"px")
    document.documentElement.style.setProperty('--y',e.clientY+"px")
})

window.addEventListener('scroll',(event)=>{

    let valeur =scrollY/4;

    let descriptionCompetence=document.querySelector('.descriptionCompetence')

    descriptionCompetence.style.bottom= valeur * + 0.5 + "px"

    let imageCompetence=document.querySelector('.html5')
    imageCompetence.style.top= valeur * + 0.2 +"px"

    let descriptionCompetencePhp=document.querySelector('.descriptionCompetencePhp')

    descriptionCompetencePhp.style.bottom= valeur * + 0.5 + "px"

    let imageCompetencePhp=document.querySelector('.php8')
    imageCompetencePhp.style.top= valeur * + 0.2 +"px"

})


if(window.matchMedia("(max-width:800px)").matches){

    let css=document.querySelector('.imgCss')
    css.addEventListener('click',(e)=>{
        css.style.opacity="0"
        css.style.filter="blur(50px)"
        css.style.transition="5s"
        css.style.transform="translateY(-150px)"

    })

    
    let js=document.querySelector('.imgJs')
    js.addEventListener('click',(e)=>{
        js.style.opacity="0"
        js.style.filter="blur(50px)"
        js.style.transition="5s"
        js.style.transform="translateY(-150px)"
    })

}

/**********************neon ***************************/
/*
window.addEventListener('load',(e)=>{
setInterval(pOn,500)
setInterval(pOff,700)
setInterval(oOn,300)
setInterval(oOff,600)
})

function pOn(){
    let p=document.querySelector('.p')
    p.style.textShadow="white 5px 2px 5px"
    p.style.color="white"
    p.style.opacity="1"
}

function pOff(){
    let p=document.querySelector('.p')
    p.style.textShadow="none"
    p.style.color="whitesmoke"
    p.style.opacity="0.6"
}

function oOn(){
    let o=document.querySelector('.o')
    o.style.textShadow="white 5px 2px 5px"
    o.style.color="white"
    o.style.opacity="1"
}

function oOff(){
    let o=document.querySelector('.o')
    o.style.textShadow="none"
    o.style.color="whitesmoke"
    o.style.opacity="0.6"
}*/