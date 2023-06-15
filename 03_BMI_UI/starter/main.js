// const mainBtn = document.querySelector(".main-btn")
// const colors = ['#222831', '#ff5722' , '#2d4059' , '#374027' ,'#109368' , '#110472' ,'#280368' ]

// mainBtn.addEventListener("clic", onClick)

// let nbClick = 0

// function onClick (event){
//     nbClick++
//     if (nbClick > 5) nbClick = 0
//     console.log(nbClick)
// }

//_________________________________



// const mainBtn = document.querySelector(".main-btn")

// const mainContainer = document.querySelector(".main-container")

// const colors = ['#94aac9', '#6b95cd', '#264b7d' , '#675fb4' , '#623188' , '#a95f99' , '#d370c4' ]

// mainBtn.addEventListener("click", onClick)

// let nbClick = 0

// function onClick (event){
//     if (nbClick >= colors.length) nbClick = 0  
//     mainContainer.style.backgroundColor = colors[nbClick]
//     nbClick++
// }

//________________________

// const mainBtn = document.querySelector(".main-btn")

// const mainContainer = document.querySelector(".main-container")

// const colors = ['#94aac9', '#6b95cd', '#264b7d' , '#675fb4' , '#623188' , '#a95f99' , '#d370c4' ]

// mainBtn.addEventListener("mouseover", onClick)

// let nbClick = 0

// function onClick (event){
//     if (nbClick >= colors.length) nbClick = 0  
//     mainContainer.style.backgroundColor = colors[nbClick]
//     nbClick++
// }



// const mainBtn = document.querySelector(".main-btn")
// const input =document.querySelector("input")
// const mainContainer = document.querySelector(`.main-container`)
   
//     mainBtn.addEventListener("click", onClick)


//     function onClick (event){
//     mainContainer.style.backgroundColor = input.value
//     }





// const mainBtn = document.querySelector(".main-btn")
// const input =document.querySelector("input")
// const mainContainer = document.querySelector(`.main-container`)
   
//     mainBtn.addEventListener("click", onClick)


//     function onClick (event){
//     mainContainer.style.backgroundColor = input.value
//     }








const bmiData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 },
  ];


//   IMC = poids en kg / taille² en Cm 
//   calcul au carré : 6 ** 2 = 36

 
const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const btn = document.querySelector(".form-btn")
const bmiValue = document.querySelector(".bmi-Value")
const description = document.querySelector(".description")

btn.addEventListener('click', oonBtnClick)

function oonBtnClick() {
    const wValue = weight.value
    const hValue = height.value

    if(!wValue || !hValue || wValue <= 0 || hValue <= 0) {
        handleError()
        return
    }
    const bmi = (wValue / Math.pow((hValue / 100), 2)).toFixed(1)
    displayResult(bmi);
}

function displayResult(val) {
    let rank
    for(let i =0; i < bmiData.length; i++){
        if(val >= bmiData[i].range[0] && val < bmiData[i].range[1]){
            rank = bmiData[i]
            break;
        } else if (typeof bmiData[i].range === 'number' && val >= bmiData[i].range){
            rank = bmiData[i]
        }
    }
    bmiValue.textContent = val;
    bmiValue.style.color = rank.color
    description.textContent = rank.name
}

function handleError() {
    bmiValue.textContent = "Echec"
    description.textContent = "remplissez correctement le formulaire !"
}



