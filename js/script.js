console.log(arrayIcone);


const container = document.querySelector(".card_container");

//oggetto con colori per tipo di icona


let coloriIcone = { animal: "blue", vegetable: "orange", user: "violet" };

for (let i = 0; i < arrayIcone.length; i++) {
    let icona = arrayIcone[i];
    let { name, prefix, type, family } = icona;

    let colori = coloriIcone[type];
    let card = `<div class="card my_col_5 align-items-center pt-2 " style="">
                    <i class="${family} ${prefix}${name}" style="color:${colori}"></i>
                    <div class="card-body">${name}</div>
                </div>`;



    container.innerHTML += card;
}
