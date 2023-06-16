import games from "./games.json" assert { type: "json" };

// init();
// function init() {
//   const nb1 = 2
//   const nb2 = 3
//   const nb3 = nomDeLaFunction(nb1, nb2)
//   const res = nomDeLaFunction(2, 3)
//   console.log(games);
// }
// function nomDeLaFunction(arg1 , arg2){
//   return arg1 + arg2;
// }
//___________________________

// const nb1 = 4;
// const nb2 = 6
// const myFonction = (a1, a2)  =>{
//   return a1 + a2
// }
// console.log (myFonction(nb1, nb2))
//____________________________

// const nb1 = 4;
// const nb2 = 6
// const myFonction = (a1, a2)  => {
//   return a1 + a2
// }
// const myArray = [2, 4, 6, 7]
// myArray.forEach ((Element) => {
//   console.log ('hello')
// })
//____________________________

// const nb1 = 4;
// const nb2 = 6

// const myFonction = (a1, a2)  => {
//   return a1 + a2
// }
// const myArray = [2, 4, 6, 7]
// myArray.forEach ((el) => {
//   console.log (el)
// })
//____________________________

// const nb1 = 4;
// const nb2 = 6
// const myFonction = (a1, a2)  => {
//   return a1 + a2
// }
// const myArray = [2, 4, 6, 7]
// const functionForMyForEach = (el, index) => {
//   console.log (el)
// }
// myArray.forEach(functionForMyForEach)

//____________________________

// const nb1 = 4;
// const nb2 = 6
// const myFonction = (a1, a2)  => {
//   return a1 + a2
// }
// const myArray = [2, 4, 6, 7]
// const functionForMyForEach = (el, index) => {
//   console.log (el)
// }
// myArray.forEach(functionForMyForEach)
//____________________________

    // a. Logger le premier element du tableau games

           // console.log(gmaes[0])
  //____________________________

    // b. Logger l'annee du 3eme element du tableau games

          // console.log(gmaes[2].year)
  //____________________________

    // c. Logger le titre du dernier element du tableau

          // console.log(games[games.length-1]. title)
  //____________________________

// 1. Ecrire une fonction qui prend en parametre le tableau games et qui retourne un nouveau tableau de tous les noms de jeux (.title)
    // solution 1:

        // const getAllTitles = (arr) => {
        // let titles = []
        // for (let i = 0; i < arr.length; i++) {
        //   let currentTitle = arr[i].title;
        //   titles.push(currentTitle);
        // }
        // return titles;
        // }
        // const result = getAllTitles(games);
        // console.log(result)

 //____________________________

// solution 2:
          // const getAllTitles = (arr) => {
          //   let titles = []
          // arr.forEach((currentGame) => {
          //   let currentTitle = currentGame.title;
          //   titles.push(currentTitle);
          // })
          //   return titles;           
          // }
          // const result = getAllTitles(games);
          // console.log(result)

 //____________________________

// solution 3:
//           const getAllTitles = (arr) => {
//             let titles = []
//           arr.forEach(games => titles.push(games.title))
//           return titles
//           }
//           const result = getAllTitles(games);
//           console.log(result)


// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (games), et qui retourne un nouveau tableau de noms de jeux de l'annee specifiee

// solution 1:
    // const getAllGamesNamesByYear = (year,games) =>{
    //   let result = []
    //   for (let i = 0; i < games.length; i++) {
    //     if (games[i].year === year ) {
    //         result.push(games[i].title)
    //     }
    // }
    //   return result
    // }

 //____________________________

// solution 2:
      // const getGamesNamesByYear = (yearParam,arr )=>{
      //   let result = []
      //   arr.forEach ((el) => { 
      //     if(yearParam === el.year){
      //       result.push(el.title)
      //     }
      // })
      // return result
      // }
      // console.log(getGamesNamesByYear)

// 3. Ecrire une fonction qui prend en parametre un tableau (games) retourne un tableau de noms de jeux, a condition que leur note soit superieur ou egal a 8

// solution 1:
// function getGamesNameByRate(tab) {
//   let goodGamesNames = []

//   for (let i = 0; i < tab.length; i++) {
//       if (tab[i].rate > 8) {
//           goodGamesNames.push(tab[i].title)
//       }
//   }

//   return goodGamesNames;
// }
 //____________________________

// solution 2:
// const getGamesNamesByRate = (rating, arr) => {
//     let titles =[]
//    arr.forEach ((el) => { 
//           if(rating =< el.rate){
//            titles.push(el.title)
//           }
    //   })
    // return titles;
// }
// console.log(getGamesNamesByRate(8, games))

// 4. Ecrire une fonction qui prend en parametre une console et un tableau (games), et qui retourne un nouveau tableau de tous les jeux disponibles sur cette console

// solution 1:
// const getAvailableGamesDevice =(dvc, games) =>  {
//   let titles = [];

//   games.forEach((el) => {
//       if (el.devices.includes(dvc) ){
//        titles.push(el.title)
//       }
//   })

//   return titles;
// }
// console.log(getAvailableGamesDevice("playstation 4", games))


 //____________________________

 // solution 2:
 const getGameTitlesByDevice = (deviceStr, arr) => {
  let titles = []

  arr.forEach((game) => {
      for (let i = 0; i < game.devices.length; i++) {
          const element = game.devices[i];
          if (element.includes(deviceStr)) {
              titles.push(game.title)
              break;
          }
      }
      // if(game.devices.includes(deviceStr)){
      //     titles.push(game.title)
      // }
  })

  return titles;
}

console.log(getGameTitlesByDevice('play', games))

