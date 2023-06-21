const dataset = 'bor_frequentation_piscine_tr'

const btn = document.querySelector('button')
const errorMsg = document.querySelector('.errorMsg')
const placeNames = document.querySelectorAll('.place-name')
const placeInfos = document.querySelectorAll('.place-infos')
const visitors = document.querySelectorAll('.visitors')



btn.addEventListener('click', onBtnClick)

async function fetchData() {
    try {
        const response = await fetch(`https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=${dataset}`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        const data = await response.json()
     
    changeColorBtn('green')

        displayData(data);
    }
    catch (error) {
    
       changeColorBtn('red')
        errorMsg.textContent = `Coucou`
    }
}



function btnChange(stateBtn) {
    if (stateBtn === 'fetching') {
        btn.textContent = '...'
        btn.classList.add('searching')
    } else if (stateBtn === 'reset') {
        btn.textContent = 'refresh'
        btn.classList.remove('searching')
    }
}



function onBtnClick(){
 
    changeColorBtn('blue')
    fetchData()
}

function changeColorBtn(couleur) {
    btn.style.backgroundColor = couleur
}



function displayData(data){

    placeNames.forEach((el, index) =>{

        const etab = data.records[index].fields.etablissement_etalib 
        const zone = data.records[index].fields.fmizonlib
        placeNames[index].textContent =  `${etab}` / `${zone}` 

        const current = data.records[index].fields.fmicourante
        const  max = data.records[index].fields.fmizonmax
        placeInfos[index].textContent = `${current}` / `${max}` 

        visitors[index].style.transform = `scaleX(${current} / ${max})`
})
}



      