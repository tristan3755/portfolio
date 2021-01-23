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

    let leTitre=document.querySelector('.titreSect4 h2')
    leTitre.innerHTML="cliquez sur les bulles"
    
    let js=document.querySelector('.imgJs')
    js.addEventListener('click',(e)=>{
        js.style.opacity="0"
        js.style.filter="blur(50px)"
        js.style.transition="5s"
        js.style.transform="translateY(-150px)"
    })

}

/*******************************portfolio**********************************************/


let monPortfolio=[


    {
    image:"./images/community.jpg",
    lien:"./sitesPortfolio/anim/index.html",
    },

    {
        image:"./images/gantColor.jpg",
        lien:"./sitesPortfolio/batiment/index.html",
        },

        {
            image:"./images/liberty.jpg",
            lien:"./sitesPortfolio/integration web/index.html",
            },

]

for (let i in monPortfolio){

let monBloc=document.createElement('article')
monBloc.style.position="relative"
monBloc.style.transition="ease 2s"
let monImage=document.createElement('img')
monImage.src=monPortfolio[i].image
monImage.style.position="absolute"
monImage.style.height="100%"
monImage.style.width="100%"
monImage.style.objectFit="cover"
monImage.style.borderRadius="5px"

monImage.addEventListener('click',lienPortfolio(i))

monBloc.appendChild(monImage)

document.getElementById('portfolio').appendChild(monBloc)

function lienPortfolio(liens){

return function(){
    window.open(monPortfolio[liens].lien)
}
}
}


let monPortfolio2=[


    {
    image2:"./images/organiz.jpg",
    lien2:"./sitesPortfolio/projetDiplome/index.html",
    },

    {
        image2:"./images/the.jpg",
        lien2:"./sitesPortfolio/site de thé/index.html",
        },

        
]

for (let i in monPortfolio2){

let monBloc2=document.createElement('article')
monBloc2.style.position="relative"
monBloc2.style.marginTop="5px"
monBloc2.style.marginBottom="5px"
let monImage2=document.createElement('img')
monImage2.src=monPortfolio2[i].image2
monImage2.style.position="absolute"
monImage2.style.height="100%"
monImage2.style.width="100%"
monImage2.style.objectFit="cover"
monImage2.style.borderRadius="5px"

monImage2.addEventListener('click',lienPortfolio2(i))

monBloc2.appendChild(monImage2)

document.getElementById('portfolio2').appendChild(monBloc2)

function lienPortfolio2(liens2){

return function(){
    window.open(monPortfolio2[liens2].lien2)
}
}
}

