const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function () {

    let novoPokemon = input.value;
    input.value = "";

    const listPoke = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listPoke.appendChild(listText)
    listText.textContent = novoPokemon
    listPoke.appendChild(listBtn)
    listBtn.textContent = 'Excluir Pokemon'

    list.appendChild(listPoke)

    listBtn.onclick = function (e) {

        list.removeChild(listPoke);

    }
    input.focus();


}
