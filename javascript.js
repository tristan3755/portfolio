document.documentElement.addEventListener('mousemove',(e)=>{

    document.documentElement.style.setProperty('--x',e.clientX+"px")
    document.documentElement.style.setProperty('--y',e.clientY+"px")
})

if(window.matchMedia("(max-width:800px)").matches){

    let css=document.querySelector('.imgCss')
    css.addEventListener('click',(e)=>{
        css.style.opacity="0"
        css.style.filter="blur(50px)"
        css.style.transition="5s"
        css.style.transform="translateY(-150px)"

    })

    let leTitre=document.querySelector('.titreSect4 h1')
    leTitre.innerHTML="Mes compétences: "+" <br>" +"cliquez sur les bulles pour en savoir plus"
    
    let js=document.querySelector('.imgJs')
    js.addEventListener('click',(e)=>{
        js.style.opacity="0"
        js.style.filter="blur(50px)"
        js.style.transition="5s"
        js.style.transform="translateY(-150px)"
    })

    let html=document.querySelector('.imgHtml')
    html.addEventListener('click',(e)=>{
        html.style.opacity="0"
        html.style.filter="blur(50px)"
        html.style.transition="5s"
        html.style.transform="translateY(-150px)"
    })

    let php=document.querySelector('.imgPhp')
    php.addEventListener('click',(e)=>{
        php.style.opacity="0"
        php.style.filter="blur(50px)"
        php.style.transition="5s"
        php.style.transform="translateY(-150px)"
    })
}

/*******************************portfolio**********************************************/


let monPortfolio=[


    {
    image:"./images/community.jpg",
    lien:"./sitesPortfolio/anim/index.html",
    description:"Site réalisé pour l'agence web Community à Nancy lors de mon Stage de fin d'étude",
    },

    {
        image:"./images/gantColor.jpg",
        lien:"./sitesPortfolio/batiment/index.html",
        description:"Site réalisé pour l'agence web Community à Nancy lors de mon Stage de fin d'étude",
        },

        {
            image:"./images/liberty.jpg",
            lien:"./sitesPortfolio/integration web/index.html",
            description:"Site réalisé en travaux dirigés lors de mes études",
            },

]

for (let i in monPortfolio){

let monBloc=document.createElement('article')
monBloc.style.position="relative"
let monBlocDescription=document.createElement('div')
monBlocDescription.classList.add('divHover')
let maDescription=document.createElement('p')
maDescription.innerHTML=monPortfolio[i].description
maDescription.style.fontFamily="Bangers, cursive"
maDescription.style.color="white"
maDescription.style.textAlign="center"
maDescription.style.fontSize="80%"
maDescription.style.letterSpacing="2px"
monBlocDescription.appendChild(maDescription)
monBloc.appendChild(monBlocDescription)
let monImage=document.createElement('img')
monImage.classList.add('imgPortfolio')
monImage.src=monPortfolio[i].image
monImage.style.position="absolute"
monImage.style.height="100%"
monImage.style.width="100%"
monImage.style.objectFit="cover"
monImage.style.borderRadius="2px"

monImage.addEventListener('click',lienPortfolio(i))
monBlocDescription.addEventListener('click',lienPortfolio(i))

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
        {
            image2:"./images/meteo.jpg",
            lien2:"./sitesPortfolio/apiMeteo/index.html",
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
monImage2.style.borderRadius="2px"

monImage2.addEventListener('click',lienPortfolio2(i))

monBloc2.appendChild(monImage2)

document.getElementById('portfolio2').appendChild(monBloc2)

function lienPortfolio2(liens2){

return function(){
    window.open(monPortfolio2[liens2].lien2)
}
}
}

/********************************fusee *********************************/

let fusee=document.getElementById("fusee")

window.addEventListener("scroll",(event)=>{
    let valeur=window.scrollY

    fusee.style.bottom = valeur*0.8+"px"
})

/***********************menu *********************/

let qui=document.querySelector(".qui")

let menuImage=document.querySelector(".images")
qui.addEventListener("mouseover",()=>{
    menuImage.style.backgroundImage="url(./images/interrogation.jpg)"
    menuImage.style.backgroundSize="cover"
    menuImage.style.backgroundPosition="center"
       
})
qui.addEventListener("mouseout",()=>{
    menuImage.style.backgroundImage="none"
    
})

let portfolioMenu = document.querySelector(".portfolioMenu")
portfolioMenu .addEventListener("mouseover",()=>{
    menuImage.style.backgroundImage="url(./images/portfolio.jpg)"
    menuImage.style.backgroundSize="cover"
    menuImage.style.backgroundPosition="right"
    
})
portfolioMenu .addEventListener("mouseout",()=>{
    menuImage.style.backgroundImage="none"
    
})

let competencesMenu = document.querySelector(".competences")
competencesMenu .addEventListener("mouseover",()=>{
    menuImage.style.backgroundImage="url(./images/competence.jpg)"
    menuImage.style.backgroundSize="cover"
    menuImage.style.backgroundPosition="center"
    
})
competencesMenu .addEventListener("mouseout",()=>{
    menuImage.style.backgroundImage="none"
    
})

let contact = document.querySelector(".contactMenu")
contact .addEventListener("mouseover",()=>{
    menuImage.style.backgroundImage="url(./images/contact.jpg)"
    menuImage.style.backgroundSize="cover"
    menuImage.style.backgroundPosition="center"
    
})
contact .addEventListener("mouseout",()=>{
    menuImage.style.backgroundImage="none"
    
})

let croix=document.getElementById("croix")
let menu=document.getElementById("menu")

croix.addEventListener("click",()=>{
    menu.style.display="none"
})

let boutonMenu=document.getElementById("bouton")

boutonMenu.addEventListener("click",()=>{
    menu.style.display="flex"
})



qui.addEventListener("click",()=>{
    menu.style.display="none"
})
portfolioMenu .addEventListener("click",()=>{
    menu.style.display="none"
})
competencesMenu.addEventListener("click",()=>{
    menu.style.display="none"
})
contact.addEventListener("click",()=>{
    menu.style.display="none"
})




