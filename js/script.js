console.log(arrayIcone);


const container = document.querySelector(".card_container");
const select = document.querySelector(".form-select");

//array per dividere le icone per type
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

//avrei voluto usare la funzione .filter per selezionare i type delle icone ma mi dava problemi


//add event listener che riconosce la categoria cliccata e stampa le card degli array"type"
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

//FUNZIONE PER STAMPARE LE CATEGORIE DI ICONE
function printAnimalCategory(array) {
    for (let i = 0; i < array.length; i++) {
        let icona = array[i];
        let { name, prefix, type, family } = icona;

        let colori = coloriIcone[type];
        let card = `<div class="card my_col_5 align-items-center pt-2 " style="">
                        <i class="${family} ${prefix}${name}" style="color:${colori}"></i>
                        <div class="card-body text_style">${name}</div>
                    </div>`;

        container.innerHTML += card;
    }
}



//FUNZIONE PER STAMPARE LE CARD
function generateCard(array) {
    for (let i = 0; i < array.length; i++) {
        let icona = array[i];
        let { name, prefix, type, family } = icona;

        let colori = coloriIcone[type];
        let card = `<div class="card my_col_5 align-items-center pt-2 " style="">
                        <i class="${family} ${prefix}${name}" style="color:${colori}"></i>
                        <div class="card-body text_style">${name}</div>
                    </div>`;

        container.innerHTML += card;

        //pusho le icone negli array a seconda del loro type
        if (type === "animal") {
            arrayAnimal.push(icona);
        } else if (type === "vegetable") {
            arrayVegetable.push(icona);
        } else if (type === "user") {
            arrayUser.push(icona);
        }
    }

}


