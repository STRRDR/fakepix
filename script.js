const nameInput = document.querySelector("#name-input");
const valueInput = document.querySelector("#value-input");
let user;
let value;

function getData() {
    user = nameInput.value.toUpperCase();
    value = valueInput.value;

    document.write(`Nome: ${user}`);
    document.write(`Valor: ${value}`);
}