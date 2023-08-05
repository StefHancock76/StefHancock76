let groceryList = document.querySelector('#grocery_list');
let addToListButton = document.querySelector('#add_to_list');
let groceryListInput = document.querySelector("#grocery_list_input");
let editListName = document.querySelector('#edit_list_name');
let groceryQtyInput = document.querySelector("#quantity_input");
let listName = document.querySelector('#list_name');
let listNameInput = document.querySelector('#list_item');


editListName.addEventListener('click', () => {
    if (listNameInput.style.visibility = 'hidden') {
        listNameInput.style.visibility = 'visible';
        console.log("show");
    } else {
        listNameInput.style.visibility = 'hidden';
        console.log("hide");

    }
})

let addToList = () => {
    if (groceryListInput.value !== '') {
        let tr = document.createElement('tr');
        tr.textContent = groceryListInput.value;
        groceryList.appendChild(tr);
        groceryListInput.value = '';
    }
    if (groceryQtyInput.value !== '') {
        let th = document.createElement('th');
        th.textContent = groceryQtyInput.value;
        groceryList.appendChild(th);
        groceryQtyInput.value = '';
    }
}


addToListButton.addEventListener('click', () => {
    addToList();
})

groceryListInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        addToList();
    }
});