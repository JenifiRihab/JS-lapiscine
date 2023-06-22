const users = getUsers();

async function getUsers() {
    try {
        const response = await fetch(
            "https://randomuser.me/api/?nat=fr&results=50"
        );

        const data = await response.json();
        if(!response.ok){
            throw new Error('fetch data issue')
        }
     
        formatData(data.results)
    } catch (error) {
        console.log(error);
    }
}

// a. afficher le dernier élément du tableau

            // function getLastElement(arr){
            //     console.log(arr[arr.length - 1])
            // }


// b. afficher l'age le plus élevé

            // function getOldestAges (users){
            // let oldest = users[0]

            //     users.forEach((element) => {
            //         if (element.dob.age > oldest.dob.age) oldest = element
            //     })
            //     console.log(oldest)
            // }
// --------- sinon---------

            // function getOldestAges (users){
            //     users.sort((a, b) => {
            //         return b.dob.age - a.dob.age
            // })
            // console.log(arr[0])

            // }

// c. afficher le nombre d'homme et le nombre de femmes

            // function getNumberUsersByGender(users) {
            // let maleCount = 0
            // let femaleCount = 0

            // users.forEach((element) =>{
            //     if(element.gender === "female"){
            //         femaleCount++
            //     } else {
            //         maleCount ++
            //     }
            // })
            // console.log(maleCount, femaleCount);

            // }


// ------------------sionon-----------
            // function getNumberUsersByGender(users) {
            //     let maleCount = 0
            //     let femaleCount = 0

            // users.forEach((element) =>{

            // element.gender === "female" ? femaleCount++ :maleCount++.
            // })
            // console.log(maleCount, femaleCount);
            // }

// 1. afficher un tableau d'objet au format {name : Daphne Durand, age: 61}

            // function formatData(arr){
            //     const result = arr.map(el =>{
            //         const first = el.name.first
            //         const last = el.name.last
            //         const age= el.dob.age
            //         return { name: `${el.name.first} ${el.name.last}`, age:el.dob.age}
                
            //     });
            //     console.log(result)
            // }
// 2. afficher un tableau d'objet au format {name : Daphne Durand, ageInferiorThirty: true}

            // function formatData(arr){
            //     const result = arr.map(el => {
            //         const first = el.name.first
            //         const last = el.name.last
            //         const res = el.dob.age <= 30
            //         return { name: `${el.name.first} ${el.name.last}`, ageInferiorThirty:res }
                    
            //     })
            //     console.log(result)
            //     }


// 3. afficher un tableau de messages au format {mail: 'd.durand@example.com', message: 'Bonjour Daphné, votre adresse "21 rue Voltaire, 33400 Talence" est-elle correcte ?'}

function formatData(arr) {
    const result = arr.map(el => {
        return {
            mail: el.email,
            message: `
             Bonjour ${el.name.first}, votre adresse "${el.location.street.number} ${el.location.street.name}, ${el.location.postcode} ${el.location.city}" est-elle correcte ?
             `
        }
    });

    console.log(result)
}