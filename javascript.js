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


    if(window.matchMedia("(max-width:400px)").matches){

        let valeur2 =scrollY/7;
    
        let descriptionCompetencePhp2=document.querySelector('.descriptionCompetencePhp')
    
        descriptionCompetencePhp2.style.bottom= valeur2 * + 0.5 + "px"
    
        let imageCompetencePhp2=document.querySelector('.php8')
        imageCompetencePhp2.style.top= valeur2 * + 0.2 +"px"
    }
    

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

