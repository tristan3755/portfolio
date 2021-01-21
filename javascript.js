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

})