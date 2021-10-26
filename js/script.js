console.log(arrayIcone);

const container = document.querySelector(".card_container");

for (let i = 0; i < arrayIcone.length; i++) {
    let icona = arrayIcone[i];
    let { name, prefix, type, family } = icona;

    let card = `<div class="card my_col_5 align-items-center pt-2 " style="">
                    <i class="${family} ${prefix}${name}"></i>
                    <div class="card-body">${name}</div>
                </div>`;
    container.innerHTML += card;

}