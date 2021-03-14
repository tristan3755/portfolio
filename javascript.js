/****************************IntersectionObserverGlobal*************************/
let mesImages = document.querySelectorAll("img");

function lazyLoad(target) {
  let Intersection = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log("limage est rentrée");

      if (entry.isIntersecting) {
        let imagesEntrees = entry.target;
        let source = imagesEntrees.getAttribute("data-lazy");
        imagesEntrees.setAttribute("src", source);
        observer.disconnect();
      }
    });
  });

  Intersection.observe(target);
}

mesImages.forEach(lazyLoad);
/****************************IntersectionObserverGlobal*************************/

document.documentElement.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty("--x", e.clientX + "px");
  document.documentElement.style.setProperty("--y", e.clientY + "px");
});

/*******************************portfolio**********************************************/

let monPortfolio = [
  {
    image: "./images/community.jpg",
    lien: "./sitesPortfolio/anim/index.html",
    description:
      "Site réalisé pour l'agence web Community à Nancy lors de mon Stage de fin d'étude",
  },

  {
    image: "./images/gantColor.jpg",
    lien: "./sitesPortfolio/batiment/index.html",
    description:
      "Site réalisé pour l'agence web Community à Nancy lors de mon Stage de fin d'étude",
  },

  {
    image: "./images/liberty.jpg",
    lien: "./sitesPortfolio/integration web/index.html",
    description: "Site réalisé en travaux dirigés lors de mes études",
  },
];

for (let i in monPortfolio) {
  let monBloc = document.createElement("article");
  monBloc.style.position = "relative";
  let monBlocDescription = document.createElement("div");
  monBlocDescription.classList.add("divHover");
  let maDescription = document.createElement("p");
  maDescription.innerHTML = monPortfolio[i].description;
  maDescription.style.fontFamily = "Bangers, cursive";
  maDescription.style.color = "white";
  maDescription.style.textAlign = "center";
  maDescription.style.fontSize = "80%";
  maDescription.style.letterSpacing = "2px";
  maDescription.style.lineHeight = "25px";
  monBlocDescription.appendChild(maDescription);
  monBloc.appendChild(monBlocDescription);
  let monImage = document.createElement("img");
  monImage.src = monPortfolio[i].image;
  monImage.style.position = "absolute";
  monImage.style.height = "100%";
  monImage.style.width = "100%";
  monImage.style.objectFit = "cover";
  monImage.style.borderRadius = "2px";

  monImage.addEventListener("click", lienPortfolio(i));
  monBlocDescription.addEventListener("click", lienPortfolio(i));

  monBloc.appendChild(monImage);

  document.getElementById("portfolio").appendChild(monBloc);

  function lienPortfolio(liens) {
    return function () {
      window.open(monPortfolio[liens].lien);
    };
  }
}

let monPortfolio2 = [
  {
    image2: "./images/organiz.jpg",
    lien2: "./sitesPortfolio/projetDiplome/index.html",
    description2:
      "Première page réalisée dans l'optique d'un projet d'une application web de gestion de facture",
  },

  {
    image2: "./images/the.jpg",
    lien2: "./sitesPortfolio/site de thé/index.html",
    description2: "Site réalisé pour un projet fictif de site de thé",
  },
  {
    image2: "./images/meteo.jpg",
    lien2: "./sitesPortfolio/apiMeteo/index.html",
    description2:
      "Application web météo réalisée grace à l'interrogation en AJAX d'une API REST",
  },
];

for (let i in monPortfolio2) {
  let monBloc2 = document.createElement("article");
  monBloc2.style.position = "relative";
  monBloc2.style.marginTop = "2px";
  monBloc2.style.marginBottom = "2px";
  let monBlocDescription2 = document.createElement("div");
  monBlocDescription2.classList.add("divHover");
  let maDescription2 = document.createElement("p");
  maDescription2.innerHTML = monPortfolio2[i].description2;
  maDescription2.style.fontFamily = "Bangers, cursive";
  maDescription2.style.color = "white";
  maDescription2.style.textAlign = "center";
  maDescription2.style.fontSize = "80%";
  maDescription2.style.letterSpacing = "2px";
  maDescription2.style.lineHeight = "25px";
  monBlocDescription2.appendChild(maDescription2);
  monBloc2.appendChild(monBlocDescription2);
  let monImage2 = document.createElement("img");
  monImage2.src = monPortfolio2[i].image2;
  monImage2.style.position = "absolute";
  monImage2.style.height = "100%";
  monImage2.style.width = "100%";
  monImage2.style.objectFit = "cover";
  monImage2.style.borderRadius = "2px";

  monImage2.addEventListener("click", lienPortfolio2(i));
  monBlocDescription2.addEventListener("click", lienPortfolio2(i));

  monBloc2.appendChild(monImage2);

  document.getElementById("portfolio2").appendChild(monBloc2);

  function lienPortfolio2(liens2) {
    return function () {
      window.open(monPortfolio2[liens2].lien2);
    };
  }
}

/********************************fusee *********************************/

let fusee = document.getElementById("fusee");

window.addEventListener("scroll", (event) => {
  let valeur = window.scrollY;

  fusee.style.bottom = valeur * 0.8 + "px";
});

/***********************menu *********************/

let qui = document.querySelector(".qui");

let menuImage = document.querySelector(".images");
qui.addEventListener("mouseover", () => {
  menuImage.style.backgroundImage = "url(./images/interrogation.jpg)";
  menuImage.style.backgroundSize = "cover";
  menuImage.style.backgroundPosition = "center";
});
qui.addEventListener("mouseout", () => {
  menuImage.style.backgroundImage = "none";
});

let portfolioMenu = document.querySelector(".portfolioMenu");
portfolioMenu.addEventListener("mouseover", () => {
  menuImage.style.backgroundImage = "url(./images/portfolio.jpg)";
  menuImage.style.backgroundSize = "cover";
  menuImage.style.backgroundPosition = "right";
});
portfolioMenu.addEventListener("mouseout", () => {
  menuImage.style.backgroundImage = "none";
});

let competencesMenu = document.querySelector(".competences");
competencesMenu.addEventListener("mouseover", () => {
  menuImage.style.backgroundImage = "url(./images/competence.jpg)";
  menuImage.style.backgroundSize = "cover";
  menuImage.style.backgroundPosition = "center";
});
competencesMenu.addEventListener("mouseout", () => {
  menuImage.style.backgroundImage = "none";
});

let contact = document.querySelector(".contactMenu");
contact.addEventListener("mouseover", () => {
  menuImage.style.backgroundImage = "url(./images/contact.jpg)";
  menuImage.style.backgroundSize = "cover";
  menuImage.style.backgroundPosition = "center";
});
contact.addEventListener("mouseout", () => {
  menuImage.style.backgroundImage = "none";
});

let croix = document.getElementById("croix");
let menu = document.getElementById("menu");

croix.addEventListener("click", () => {
  menu.style.display = "none";
});

let boutonMenu = document.getElementById("bouton");

boutonMenu.addEventListener("click", () => {
  menu.style.display = "flex";
});

qui.addEventListener("click", () => {
  menu.style.display = "none";
});
portfolioMenu.addEventListener("click", () => {
  menu.style.display = "none";
});
competencesMenu.addEventListener("click", () => {
  menu.style.display = "none";
});
contact.addEventListener("click", () => {
  menu.style.display = "none";
});

/*******************************competence ****************************/

let hoverHtml = document.querySelector(".hoverHtml");

function monHoverHtml() {
  hoverHtml.style.top = "0";
  hoverHtml.style.width = "25%";
  hoverHtml.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  hoverHtml.addEventListener("click", () => {
    monHoverHtml();
  });
}

let hoverCSS = document.querySelector(".hoverCss");

function monHoverCSS() {
  hoverCSS.style.top = "0";
  hoverCSS.style.width = "25%";
  hoverCSS.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  hoverCSS.addEventListener("click", () => {
    monHoverCSS();
  });
}

let hoverJs = document.querySelector(".hoverJs");

function monHoverJs() {
  hoverJs.style.top = "0";
  hoverJs.style.width = "25%";
  hoverJs.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  hoverJs.addEventListener("click", () => {
    monHoverJs();
  });
}
let hoverPhp = document.querySelector(".hoverPhp");

function monHoverPhp() {
  hoverPhp.style.top = "0";
  hoverPhp.style.width = "25%";
  hoverPhp.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  hoverPhp.addEventListener("click", () => {
    monHoverPhp();
  });
}

let threeJs = document.querySelector(".threeJs");

function monHoverThree() {
  threeJs.style.top = "0";
  threeJs.style.width = "25%";
  threeJs.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  threeJs.addEventListener("click", () => {
    monHoverThree();
  });
}
let blenderHover = document.querySelector(".blenderHover");

function monHoverBlender() {
  blenderHover.style.top = "0";
  blenderHover.style.width = "25%";
  blenderHover.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  blenderHover.addEventListener("click", () => {
    monHoverBlender();
  });
}
let hoverAdobeIll = document.querySelector(".hoverAdobeIll");

function monHoverIll() {
  hoverAdobeIll.style.top = "0";
  hoverAdobeIll.style.width = "25%";
  hoverAdobeIll.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  hoverAdobeIll.addEventListener("click", () => {
    monHoverIll();
  });
}
let hoverAdobePs = document.querySelector(".hoverAdobePs");

function monHoverPs() {
  hoverAdobePs.style.top = "0";
  hoverAdobePs.style.width = "25%";
  hoverAdobePs.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  hoverAdobePs.addEventListener("click", () => {
    monHoverPs();
  });
}
let mySql = document.querySelector(".mySql");

function monHoverSql() {
  mySql.style.top = "0";
  mySql.style.width = "25%";
  mySql.style.height = "25%";
}

if (matchMedia("(max-width:700px)").matches) {
  mySql.addEventListener("click", () => {
    monHoverSql();
  });
}

/****************************IntersectionObserverSection*************************/
let mesImagesOrdi = document.querySelectorAll("article");

if (window.matchMedia("(max-width:700px)").matches) {
  function translateImg(target) {
    let Intersection1 = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let imagesEntrees1 = entry.target;
            imagesEntrees1.classList.add("animIntersectSection");
            observer.disconnect();
          }
        });
      }, {
        threshold: 0
      }
     
    );

    Intersection1.observe(target);
  }

  mesImagesOrdi.forEach(translateImg);
} else {
  function translateImg(target) {
    let Intersection1 = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let imagesEntrees1 = entry.target;
            imagesEntrees1.classList.add("animIntersectSection");
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    Intersection1.observe(target);
  }

  mesImagesOrdi.forEach(translateImg);
}


/****************************chargement*************************/

let maPageChargement=document.querySelector('.chargement')
let monBody=document.querySelector('body')

window.addEventListener('load',()=>{
maPageChargement.parentElement.removeChild(maPageChargement)
monBody.style.overflowY='scroll'
})