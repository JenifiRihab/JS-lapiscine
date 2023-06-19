const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
]



// const frame = document.querySelector(".slider-frame")
// const slides = document.querySelectorAll(".slider-img")
// const title = document.querySelector(".slider-title")
// const legend = document.querySelector(".slider-legend")
// const btns = document.querySelectorAll(".slider-btn")



// etape 1:__________________________________________________________

// const btns = document.querySelectorAll(".slider-btn");
// const imgs = document.querySelectorAll(".slider-img");

// let slideIndex;

// init();

// btns.forEach((e, index) => {
//     e.leftOrRight = index;
//     e.addEventListener("click", onClickBtn);
// });

// function onClickBtn(e) {
//     if (e.currentTarget.leftOrRight === 0) {
//         slideIndex--;
//     } else {
//         slideIndex++;
//     }

//     btns[0].style.opacity = btns[1].style.opacity = 1
//     btns[0].style.pointerEvents = btns[1].style.pointerEvents = 'auto'

//     if (slideIndex <= 0) {
//         slideIndex = 0;
//         btns[0].style.opacity = 0.5
//         btns[0].style.pointerEvents = 'none'
//     } else if (slideIndex >= imgs.length - 1) {
//         slideIndex = imgs.length - 1;
//         btns[1].style.opacity = 0.5
//         btns[1].style.pointerEvents = 'none'
//     }

//     displayImages(slideIndex)
// }

// function displayImages(slideI) {
//     imgs.forEach((img, indexImg) =>{
//         img.style.transform = `translatex(${(indexImg - slideI) * 100}%)`
//     })
// }

// function init() {
//     slideIndex = 0;
//     btns[0].style.opacity = 0.5
//     btns[0].style.pointerEvents = 'none'
//     displayImages(slideIndex)
// }

// etape 2:_____________________________________________________

// const btns = document.querySelectorAll(".slider-btn");
// const imgs = document.querySelectorAll(".slider-img");

// let slideIndex;

// init();

// btns.forEach((e, index) => {
//     e.leftOrRight = index;
//     e.addEventListener("click", onClickBtn);
//     // e.addEventListener("mousedown", onUpBtn);
//     // e.addEventListener("mousep", onDownBtn);
// });

// function onDownBtn(e) {
//     console.log('down')
// }

// function onUpBtn(e) {
//     console.log('up')
// }


// function onClickBtn(e) {
//     console.log('click')
// }



// function onClickBtn(e) {
//     console.log('click')
//     if (e.currentTarget.leftOrRight === 0) {
//         slideIndex--;
//     } else {
//         slideIndex++;
//     }

//     btns[0].style.opacity = btns[1].style.opacity = 1
//     btns[0].style.pointerEvents = btns[1].style.pointerEvents = 'auto'

//     if (slideIndex <= 0) {
//         slideIndex = 0;
//         btns[0].style.opacity = 0.5
//         btns[0].style.pointerEvents = 'none'
//     } else if (slideIndex >= imgs.length - 1) {
//         slideIndex = imgs.length - 1;
//         btns[1].style.opacity = 0.5
//         btns[1].style.pointerEvents = 'none'
//     }

//     displayImages(slideIndex)
// }

// function displayImages(slideI) {
//     imgs.forEach((img, indexImg) =>{
//         img.style.transform = `translatex(${(indexImg - slideI) * 100}%)`
//     })
// }

// function init() {
//     slideIndex = 0;
//     btns[0].style.opacity = 0.5
//     btns[0].style.pointerEvents = 'none'
//     displayImages(slideIndex)
// }





// etape 3:____________________________________________________________

const btns = document.querySelectorAll(".slider-btn");
const imgs = document.querySelectorAll(".slider-img");
const dots = document.querySelectorAll(".dot");
const title = document.querySelector(".slider-title");
const legend = document.querySelector(".slider-legend");


let slideIndex;

init();

btns.forEach((el, index) => {
    el.leftOrRight = index;
    el.addEventListener("click", onClickBtn);
});

dots.forEach((dot, ind) => {
    dot.indexPosition = ind
    dot.addEventListener('click', onClickDot)
})

function onClickDot(e) {
    slideIndex = e.currentTarget.indexPosition
    updateCurrentImage(slideIndex)
}

function onDownBtn(e) {
    console.log('down')
}

function onUpBtn(e) {
    console.log('up')
}

function onClickBtn(e) {
    if (e.currentTarget.leftOrRight === 0) {
        slideIndex--;
    } else {
        slideIndex++;
    }

    updateCurrentImage(slideIndex)
}

function updateCurrentImage(slideI) {
    btns[0].style.opacity = btns[1].style.opacity = 1
    btns[0].style.pointerEvents = btns[1].style.pointerEvents = 'auto'

    if (slideI <= 0) {
        slideI = 0;
        btns[0].style.opacity = 0.3
        btns[0].style.pointerEvents = 'none'
    } else if (slideI >= imgs.length - 1) {
        slideI = imgs.length - 1;
        btns[1].style.opacity = 0.3
        btns[1].style.pointerEvents = 'none'
    }

    displayImages(slideI)
}

function displayImages(slideI) {
    title.content = slidesData[slideI].title
    legend.textContent = slidesData[slideI].description
    imgs.forEach((img, indexImg) => {
        img.style.transition = 'transform 3s';
        img.style.transform = `translateX(${(indexImg - slideI) * 100}%)`
    })
}

function init() {
    slideIndex = 0;
    dots[0].style.opacicty = 1
    btns[0].style.opacity = 0.5
    btns[0].style.pointerEvents = 'none'
    title.textContent = slidesData[slideIndex].title
    legend.textContent = slidesData[slideIndex].description
    imgs.forEach((img, indexImg) => {
        img.style.transform = `translateX(${(indexImg - slideIndex) * 100}%)`
    })
}