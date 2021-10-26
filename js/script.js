console.log(arrayIcone);


const container = document.querySelector(".card_container");
const select = document.querySelector(".form-select");

let arrayAnimal = [];
let arrayVegetable = [];
let arrayUser = [];

//oggetto con colori per tipo di icona
let coloriIcone = { animal: "blue", vegetable: "orange", user: "violet" };

//evoco la funzione per generare le card
generateCard(arrayIcone);


console.log(arrayAnimal);
console.log(arrayVegetable);
console.log(arrayUser);

//////////////////////////////////////////////////////////
//VOLEVO USARE LA FUNZIONE FILTER MA DAVA PROBLEMI
//console.log(icona);
/* const animali = icona.filter((type) => {
    if (type === "animal") {
        return true;
    }
    return false;
});
*/
//////////////////////////////////////////////////////////



select.addEventListener("change", function () {
    container.innerHTML = "";
    const value = this.value;
    console.log(value);

    if (value === "animal") {
        printAnimalCategory(arrayAnimal);

    }
    if (value === "vegetable") {
        printAnimalCategory(arrayVegetable);

    }
    if (value === "user") {
        printAnimalCategory(arrayUser);

    } if (value === "all") {
        printAnimalCategory(arrayIcone);
    }


});











///////////////////////////////////////////////////////////////////////
//FUNZIONI

//funzione per stampare le categorie di icone
function printAnimalCategory(array) {
    for (let i = 0; i < array.length; i++) {
        let icona = array[i];
        let { name, prefix, type, family } = icona;

        let colori = coloriIcone[type];
        let card = `<div class="card my_col_5 align-items-center pt-2 " style="">
                        <i class="${family} ${prefix}${name}" style="color:${colori}"></i>
                        <div class="card-body">${name}</div>
                    </div>`;



        container.innerHTML += card;


    }

}



//funzione per stampare le card
function generateCard(array) {
    for (let i = 0; i < array.length; i++) {
        let icona = array[i];
        let { name, prefix, type, family } = icona;

        let colori = coloriIcone[type];
        let card = `<div class="card my_col_5 align-items-center pt-2 " style="">
                        <i class="${family} ${prefix}${name}" style="color:${colori}"></i>
                        <div class="card-body">${name}</div>
                    </div>`;



        container.innerHTML += card;

        if (type === "animal") {
            arrayAnimal.push(icona);
        } else if (type === "vegetable") {
            arrayVegetable.push(icona);
        } else if (type === "user") {
            arrayUser.push(icona);
        }
    }

}


