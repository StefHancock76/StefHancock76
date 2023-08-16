let button = document.getElementById("add_to_list");
let input = document.getElementById("grocery_list_input");
let ul = document.querySelector("ul");
let buttonDlt = document.querySelectorAll("edit_list_name");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function deleteAfterClick() {
    li.remove(button.addEventListener("click"));

}

button.addEventListener("click", addListAfterClick);
buttonDlt.addEventListener("click", deleteAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
















