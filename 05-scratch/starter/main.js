const div = document.querySelector(`.div-to-color-1`)
const btn1 = document.querySelector(`.btn-1`)

btn1.addEventListener('click', onBtn1Click)

const colors = ['#red', '#green', '#blue']
let nbClick = 0



// EXO 1

const divToColor1 = document.querySelector('.div-to-color-1')
const btns1 = document.querySelectorAll('.btn-1')

for (let i = 0; i < btns1.length; i++) {

btns1[i].addEventListener('click',onBtn1Click)

}
function onBtn1Click(event){
    div1.style.backgroundColor = event.target.textContent
}



// EXO 2
const result2 = document.querySelector('.text-to-display-3')
const input2 = document.querySelector('.input-3')

input2.addEventListener('input', interactInput2)

function interactInput2(){

    result2.textContent = input2.value
}


// EXO 3
const result3 = document.querySelector('.text-to-display-4')
const input3 = document.querySelector('.input-4')

input3.addEventListener('input', interactInput3)

function interactInput3(){
 result3 .textContent = input3.value
}





//EXO 6
const result6 = document.querySelector('.text-to-display-6')
const select6 = document.querySelector('.select-6')

select6.addEventListener('change',interactSelect6 ) 

    function interactSelect6 (event) {

    result6.textContent = event.target.value

    }


//EXO 7
const result7 = document.querySelector('.div-to-color-7')
const input7 = document.querySelector('.input-7')

input7.addEventListener('input', interactSelect7)

function interactSelect7(event) {

    result7.style.backgroundColor = event.target.value
}


// EXO 8

const result8 = document.querySelector('.div-to-color-8')
const btn8 = document.querySelectorAll('.btn-8')

for (let i = 0; i < btn8.length; i++) {

btn8[i].addEventListener('click',onBtn8Click)

}
function onBtn8Click(event){
    result8.style.backgroundColor = event.target.getAttribute('data-color')
}



// EXO9

const result9 = document.querySelector('.text-to-display-9')
const checkboxes = document.querySelectorAll('.checkbox')

checkboxes.addEventListener('change',interactSelect9 ) 

function interactSelect9 (event) {

result9.textContent = event .value
}