

/* ============================== When we click on the menuIcon ===================================== */
const menuIcon = document.querySelector(".landing header .menu-icon");
// console.log(menuIcon);

const closeIcon = document.querySelector(".landing header .close-icon");
// console.log(closeIcon);

const navSm = document.querySelector(".landing header .sm-nav")
// console.log(navSm);

menuIcon.addEventListener("click", (e) => {
    navSm.classList.add("show-nav");
})

closeIcon.addEventListener("click", (e) => {
    navSm.classList.remove("show-nav");
})

/* ============================== when I click on a link we add an active class =================== */
const nav_lg_Links = document.querySelectorAll("header .lg-nav ul li a");
// console.log(nav_lg_Links);

nav_lg_Links.forEach(link=>{
    link.addEventListener("click",(e)=> {
        nav_lg_Links.forEach(ele=>ele.classList.remove('active'));
        e.target.classList.add("active");
    })
})

// do the same th .sm-naa
const nav_sm_Links = document.querySelectorAll("header .sm-nav ul li a");
// console.log(nav_sm_Links);

nav_sm_Links.forEach(link=>{
    link.addEventListener("click",(e)=> {
        nav_sm_Links.forEach(ele=>ele.classList.remove('active'));
        e.target.classList.add("active");
    })
});
/* =============== when I click on the logo we add class active to home ============================ */
const logo = document.querySelector(".logo a");
logo.onclick = ()=> {
    nav_lg_Links.forEach(link=>link.classList.remove('active'));
    nav_sm_Links.forEach(link=>link.classList.remove('active'));
    const homeLinks=document.querySelectorAll("a.homeLink");
    homeLinks.forEach(link=>link.classList.add("active"));
}

/* =============== when we pass the height of landing page make the header fixed top =============== */
window.addEventListener("scroll", () => {
    const landingHeight = document.querySelector(".landing").clientHeight;
    const header = document.querySelector(".landing header");
    const headerHight = header.clientHeight;
    // console.log(window.pageYOffset);
    if (window.pageYOffset >= (landingHeight - headerHight)) {
        // header.width = `${headerWidth}px`;
        header.classList.add("nav-fixed-top");
    } else {
        header.classList.remove("nav-fixed-top");
    }
})


/* ========================================== progress bars loading ============================== */
window.addEventListener("scroll", () => {
    let position;
    const headerHight=document.querySelector(".landing header").clientHeight;
    if(window.innerWidth <= 992) {
        const skillsSec=document.querySelector(".about-sec .box-text");
        position = skillsSec.offsetTop - headerHight;
    }else {
        const skillsSec=document.querySelector(".about-sec");
        position = skillsSec.offsetTop - headerHight;
    }

    const allProgressbars = document.querySelectorAll(".about-sec .box-text .skills-con .progress-bar p span");
    if (window.pageYOffset >= position) {
        allProgressbars.forEach(span => {
            span.style.width = span.getAttribute('data-width');
            span.style.setProperty('--opacityValue', '1');
            // let spanBefore = window.getComputedStyle(span,"::before");how to select pseudo elements
        })
    }else {
        allProgressbars.forEach(span => {
            span.style.width = '0';
            span.style.setProperty('--opacityValue', '0');
        })
    }
    
})

/* ========================================== Deal with projects ============================== */

// cardsArr
let cardsArr = [
    {
        imgSrc: "images/trestoProject.png",
        projectTitle: "Tresto Landing",
        projectCategory: "website",
        projectLink: "https://hafsaidsaid.github.io/tresto/"
    },
    {
        imgSrc: "images/woosterProject.png",
        projectTitle: "wooster Landing",
        projectCategory: "website",
        projectLink: "https://hafsaidsaid.github.io/wooster/"
    },
    {
        imgSrc: "images/realestateProject.png",
        projectTitle: "Realestate website",
        projectCategory: "website",
        projectLink: "https://hafsaidsaid.github.io/hafsa-realestate/"
    },
    
    {
        imgSrc: "images/bondiProject.png",
        projectTitle: "Bondi Landing",
        projectCategory: "website",
        projectLink: "https://hafsaidsaid.github.io/bondi/"
    },
    {
        imgSrc: "images/accordionProject2.png",
        projectTitle: "accordion",
        projectCategory: "other",
        projectLink: "https://hafsaidsaid.github.io/accordion/"
    },
    {
        imgSrc: "images/formProject.png",
        projectTitle: "form design",
        projectCategory: "other",
        projectLink: "https://hafsaidsaid.github.io/form_design/"
    },
    {
        imgSrc: "images/tipProject.png",
        projectTitle: "Tip Calculator",
        projectCategory: "other",
        projectLink: "https://hafsaidsaid.github.io/tip_calculator/"
    },
    {
        imgSrc: "images/todoProject.png",
        projectTitle: "Todo List",
        projectCategory: "other",
        projectLink: "https://hafsaidsaid.github.io/todo_list/"
    },
    {
        imgSrc: "images/robotProject.png",
        projectTitle: "Draw Robot",
        projectCategory: "other",
        projectLink: "https://hafsaidsaid.github.io/robot/"
    },
    {
        imgSrc: "images/massConverterProject.png",
        projectTitle: "Mass Converter",
        projectCategory: "other",
        projectLink: "https://hafsaidsaid.github.io/mass_converter/"
    },
    {
        imgSrc: "images/miniCalendarProject.png",
        projectTitle: "Mini Calendar",
        projectCategory: "other",
        projectLink: "https://hafsaidsaid.github.io/mini_calendar/"
    },
    {
        imgSrc: "images/guessNumberProject.png",
        projectTitle: "Guess Number Game",
        projectCategory: "game",
        projectLink: "https://hafsaidsaid.github.io/guess_number/"
    },
    {
        imgSrc: "images/chronometerProject.png",
        projectTitle: "Chronometer Project",
        projectCategory: "other",
        projectLink: "https://hafsaidsaid.github.io/chronometer/"
    },
    {
        imgSrc: "images/ageCalculatorProject.png",
        projectTitle: "Age Calculator",
        projectCategory: "other",
        projectLink: "https://hafsaidsaid.github.io/age_calculator/"
    },
    {
        imgSrc: "images/ecommerceWebsiteProject.png",
        projectTitle: "Ecommerce Store",
        projectCategory: "other",
        projectLink: "https://hafsaidsaid.github.io/ecommerce_store/"
    },
    //diceGameProject
    {
        imgSrc: "images/diceGameProject.png",
        projectTitle: "Dice Game",
        projectCategory: "game",
        projectLink: "https://hafsaidsaid.github.io/dice_game/"
    },

];

const cardsCon = document.querySelector(".projects-sec .cards");
console.log(cardsCon);

window.addEventListener("DOMContentLoaded",(e)=> {
    cardsArr.forEach(card=> {
        cardsCon.innerHTML += createCard(card);
    })
})


// pagination links
const pagLinks = document.querySelectorAll('.projects-sec .pagination button');
console.log(pagLinks);

pagLinks.forEach(link=> {
    // click on the link
    link.addEventListener("click",(e)=> {
        //add class active on link
        pagLinks.forEach(link=>link.classList.remove('active'));
        e.target.classList.add('active');
        cardsCon.innerHTML="";
        cardsArr.forEach(card=> {
            if(link.getAttribute('data-category') == card.projectCategory) {
                cardsCon.innerHTML += createCard(card);
            }

            if(link.getAttribute('data-category') == "all") {
                cardsCon.innerHTML += createCard(card);
            }
        })
    })
});


//function create Card
function createCard(card) {
    return `<div class="card">
                <img src="${card.imgSrc}" alt="${card.projectTitle}" srcset="">
                <div class="overlay">
                    <h3>${card.projectTitle}</h3>
                    <p class="category">${card.projectCategory}</p>
                    <button><a href="${card.projectLink}" target="_blank">view project</a></button>
    </div></div> `;
}

/* ========================================== our reviews ============================== */
const reviewsCardsCon = document.querySelector(".reviews-sec .con .cards");
console.log(reviewsCardsCon);

const reviewsCards = document.querySelectorAll(".reviews-sec .con .cards .card");
console.log(reviewsCards);

const iconRight = document.querySelector(".reviews-sec .con i.fa-chevron-right");
console.log(iconRight);

const iconLeft = document.querySelector(".reviews-sec .con i.fa-chevron-left");
console.log(iconLeft);

let count=1;

iconRight.addEventListener("click",()=> {
    reviewsCards.forEach(card=>{
        card.classList.remove("active");  
    });
    reviewsCards.forEach(card=>{
        if(card.getAttribute("data-id") == count) {
            card.classList.add("active");
        }else {
            card.classList.remove("active");

        }
    })
    if(count == reviewsCards.length -1 ) {
        count=0;
    }else {
        count++;
    }
})

iconLeft.addEventListener("click",()=> {
    reviewsCards.forEach(card=>{
        card.classList.remove("active");  
    });

    reviewsCards.forEach(card=> {
        if(card.getAttribute("data-id") == count) {
            card.classList.add("active");
        }else {
            card.classList.remove("active");
        }
    })


    if(count == 1) {
        count=reviewsCards.length;
    }else {
        count--;
    }
})


/* ========================================== accordion code ============================== */
const accordionQuestions = document.querySelectorAll(".contact-sec .container .accordion .accordion-q-a .accordion-question");
console.log(accordionQuestions);

accordionQuestions.forEach(q=> {
    q.addEventListener("click",(e)=> {
        console.log(e.target.parentElement.classList.contains("active"));
        if(e.target.parentElement.classList.contains("active")) {
            e.target.parentElement.classList.remove("active");
        }else {
            accordionQuestions.forEach(q=>q.parentElement.classList.remove("active"));
            e.target.parentElement.classList.toggle("active");
        }
    })
})


/* ========================================== Submit Form to my email ============================== */
function SendMail() {
    let params = {
        from_name : document.getElementById("lastName").value + " " + document.getElementById("firstName").value,
        form_subject : document.getElementById("msgSubject").value,
        form_email : document.getElementById("email").value,
        form_phone : document.getElementById("phone").value,
        message : document.getElementById("msgBody").value,
    }
    emailjs.send("service_4hs20er","template_7rum2wm",params).then(function (res) {
        document.getElementById("lastName").value="";
        document.getElementById("firstName").value="";
        document.getElementById("msgSubject").value="";
        document.getElementById("email").value="";
        document.getElementById("phone").value="";
        document.getElementById("msgBody").value="";
        alert("Message Sent Successfully!");
    });
}