const btn = document.querySelector('button')
const errorMsg = document.querySelector('.errorMsg')
const dataset = 'bor_frequentation_piscine_tr'

btn.addEventListener('click', onBtnClick)

async function fetchData() {
    try {
        const response = await fetch(`https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=${dataset}`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        const data = await response.json()
        btnChange(reset)
        // displayData(data);
    }
    catch (error) {
        btnChange(reset)
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
    btnChange('fetching')
    fetchData()
}