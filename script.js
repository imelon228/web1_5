
const userProfile = {
    name: "Aidyn",
    birthYear: 2007,
    isDeveloper: true,
    hobbies: ["games", "walking", "sleeping"]
};

let date = new Date();

console.log(Number(date.getFullYear()) - Number(userProfile.birthYear));
console.log(userProfile.hobbies.length);

const button_form = document.getElementById("form");


const new_user = document.getElementById("username");
const newbirthyear_user = document.getElementById("birthYear");

button_form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const newname = new_user.value;
    const newbirthyear = Number(newbirthyear_user.value);
    
    userProfile.name = newname;
    userProfile.birthYear = newbirthyear;

    console.log("Updated profile", userProfile);

});



const tasks = document.getElementById('tasks');

const add_new = document.getElementById('add');
const remove_last = document.getElementById('remove');

const new_input = document.getElementById("addNewItem");




add_new.addEventListener("click", function() {

    const value_input = new_input.value.trim();

    if(value_input === null || value_input === ''){
        console.log("cannot add empty item");
        return;
    }

    const newItem = document.createElement('li');

    newItem.textContent = value_input;

    tasks.appendChild(newItem);

    new_input.value = '';
    console.log("successfully added");


})

remove_last.addEventListener("click", function() {
    const last_item = tasks.lastElementChild;

    if (last_item === null){
        console.log("no items in list");
        return;
    }

    tasks.removeChild(last_item);
    console.log("successfully removed");
})






