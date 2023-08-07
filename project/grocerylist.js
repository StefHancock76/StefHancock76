let groceryList = document.querySelector('#grocery_list');
const addToListButton = document.querySelector('#add_to_list');
const groceryQtyInput = document.querySelector("#quantity_input");
const groceryListInput = document.querySelector("#grocery_list_input");
const editListName = document.querySelector('#edit_list_name');
let listName = document.querySelector('#list_name');
let listNameInput = document.querySelector('#list_name_input');

let addToList = () => {
    if (groceryListInput.value !== '') {
        let li = document.createElement('li');
        li.textContent = groceryListInput.value;
        groceryList.appendChild(li);
        groceryListInput.value = '';
    }
    
}

addToListButton.addEventListener('click', () => {
    addToList();
})

let addToList = document.getElementById("groceryListInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addToListButton").click();
  }
});

/*let editListName*/

editListName.addEventListener('click', () => {
    if (listNameInput.style.visibility = 'hidden') {
        listNameInput.style.visibility = 'visible';
        console.log("show");
    } else {
        listNameInput.style.visibility = 'hidden';
        console.log("hide");

    }
})