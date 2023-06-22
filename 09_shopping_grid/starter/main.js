const containerRow = document.querySelector('.row')
const checks = document.querySelectorAll('.btn-check');
const select = document.querySelector('.form-select');

let data;

fetchData()

async function fetchData() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        const data = await response.json()

        displayData(data);
    }
    catch (error) {
        console.log(error);
    }
}

function displayData(data, categories = []) {
    orderList(data);

}




