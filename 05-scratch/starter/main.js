// const div = document.querySelector(`.div-to-color-1`)
// const btn1 = document.querySelector(`.btn-1`)

// btn1.addEventListener('click', onBtn1Click)

// const colors = ['#red', '#green', '#blue']
// let nbClick = 0



// // EXO 1

// const divToColor1 = document.querySelector('.div-to-color-1')
// const btns1 = document.querySelectorAll('.btn-1')

// for (let i = 0; i < btns1.length; i++) {

// btns1[i].addEventListener('click',onBtn1Click)

// }
// function onBtn1Click(event){
//     div1.style.backgroundColor = event.target.textContent
// }



// // EXO 2
// const result2 = document.querySelector('.text-to-display-3')
// const input2 = document.querySelector('.input-3')

// input2.addEventListener('input', interactInput2)

// function interactInput2(){

//     result2.textContent = input2.value
// }


// // EXO 3
// const result3 = document.querySelector('.text-to-display-4')
// const input3 = document.querySelector('.input-4')

// input3.addEventListener('input', interactInput3)

// function interactInput3(){
//  result3 .textContent = input3.value
// }





// //EXO 6
// const result6 = document.querySelector('.text-to-display-6')
// const select6 = document.querySelector('.select-6')

// select6.addEventListener('change',interactSelect6 ) 

//     function interactSelect6 (event) {

//     result6.textContent = event.target.value

//     }


// //EXO 7
// const result7 = document.querySelector('.div-to-color-7')
// const input7 = document.querySelector('.input-7')

// input7.addEventListener('input', interactSelect7)

// function interactSelect7(event) {

//     result7.style.backgroundColor = event.target.value
// }


// // EXO 8

// const result8 = document.querySelector('.div-to-color-8')
// const btn8 = document.querySelectorAll('.btn-8')

// for (let i = 0; i < btn8.length; i++) {

// btn8[i].addEventListener('click',onBtn8Click)

// }
// function onBtn8Click(event){
//     result8.style.backgroundColor = event.target.getAttribute('data-color')
// }



// // EXO9

// const result9 = document.querySelector('.text-to-display-9')
// const checkboxes = document.querySelectorAll('.checkbox')

// checkboxes.addEventListener('change',interactSelect9 ) 

// function interactSelect9 (event) {

// result9.textContent = event .value
// }





























// // Exo 1
// const div1 = document.querySelector('.div-to-color-1')
// const btns1 = document.querySelectorAll('.btn-1')

// for (let i = 0; i < btns1.length; i++) {
//     btns1[i].addEventListener('click', onBtn1Click)
// }

// function onBtn1Click(event) {
//     div1.style.backgroundColor = event.target.textContent
// }

// Exo 2, ici l'exercice consiste à manipuler une balise input
// const result2 = document.querySelector('.text-to-display-3')
// const input2 = document.querySelector('.input-3')

// input2.addEventListener('input', interactInput2)

// const originText = result2.textContent;

// function interactInput2() {
//     if (!input2.value) {
//         result2.textContent = originText
//     } else {
//         result2.textContent = input2.value
//     }
// }

// Exo 4
// const result4 = document.querySelector('.text-to-display-2')
// const form4 = document.querySelector('.form-2')
// const input4 = document.querySelector('.input-2')

// form4.addEventListener('submit', onForm4Submit)

// function onForm4Submit(e) {
//     e.preventDefault();
//     result4.textContent = input4.value
// }

// // Exo 5
// const result5 = document.querySelector('.text-to-display-5')
// const input5 = document.querySelector('.input-5')

// input5.addEventListener('input', onSlider5Change)

// function onSlider5Change(e) {
//     result5.textContent = e.target.value
// }

// const topBtn = document.querySelector('.top-btn')
// const middleBtn = document.querySelector('.middle-btn')

// topBtn.addEventListener('click', function (event) {
//     console.log(event.target, event.currentTarget)
// })

// middleBtn.addEventListener('click', function (event) {
//     event.stopPropagation()
//     console.log(event.target, event.currentTarget)
// })

// let firstNumber = 9
// const secondNumber = 2
// let result = firstNumber % secondNumber

// let myArray = [2, 3, 5, 7]
// let myObject = {
//     firstname: 'Paul',
//     lastname: 'DOAZAN',
//     age: 35,
//     hello() {
//         console.log("Hello World")
//     }
// }

// const result2 = myObject.firstname + myObject.lastname

// console.log(myObject.hello())

// EXO 6
// const result6 = document.querySelector('.text-to-display-6')
// const select6 = document.querySelector('.select-6')

// select6.addEventListener('input', onChangeSelect6)

// function onChangeSelect6(event) {
//     result6.textContent = event.currentTarget.value
// }

// EXO 7
// const result7 = document.querySelector('.div-to-color-7')
// const input7 = document.querySelector('.input-7')

// input7.addEventListener('input', onColorClick)

// function onColorClick(event) {
//     result7.style.backgroundColor = event.target.value
// }

// // EXO 8
// const result8 = document.querySelector('.div-to-color-8')
// const btns8 = document.querySelectorAll('.btn-8')

// for (let i = 0; i < btns8.length; i++) {
//     btns8[i].addEventListener('click', onBtns8Click)
// }

// function onBtns8Click(event) {
//     result8.style.backgroundColor = event.target.getAttribute('data-color')
// }

// EXO 9 
const result9 = document.querySelector('.text-to-display-9')
const checkboxes = document.querySelectorAll('.checkbox')

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', onCheckBoxChange)
}

// checkboxes[0].addEventListener('change', onCheckBoxChange)
// checkboxes[1].addEventListener('change', onCheckBoxChange)

function onCheckBoxChange() {
    let myStr = ''
    if (checkboxes[0].checked) {
        myStr += checkboxes[0].value
    }

    if (checkboxes[1].checked) {
        if (myStr) myStr += ' - '
        myStr += checkboxes[1].value
    }

    result9.textContent = myStr
}