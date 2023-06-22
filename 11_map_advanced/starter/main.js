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
     
        getLastElement(data.results)
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


// 2. afficher un tableau d'objet au format {name : Daphne Durand, adult: true}
// 3. afficher un tableau d'objet au format {name : Daphne Durand, adult: true}
// 4. afficher un tableau de messages au format {mail: 'd.durand@example.com', message: 'Bonjour Daphné, votre adresse "21 rue Voltaire, 33400 Talence" est-elle correcte ?'}