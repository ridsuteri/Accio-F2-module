const userData = [
    { id: 1, name: "John", age: "18", profession: "developer" },
    { id: 2, name: "Jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" },
]

// this is not allowed
// userData = [];

// userData.push() is allowed

let select = document.getElementById("selectProfession");
let listOnPage = document.getElementById("list");

let filterBtn = document.getElementById("filterBtn");
let addBtn = document.getElementById("addBtn");

let nameInput = document.getElementById("nameInput");
let professionInput = document.getElementById("professionInput");
let ageInput = document.getElementById("ageInput");

filterBtn.addEventListener('click', filterUsers)
addBtn.addEventListener('click', addUser)


function filterUsers() {
    let option = select.value;
    console.log(option)
    if (option == "profession") {
        alert("Please select profession")
    } else {
        let filteredUsers = userData.filter((item) => {
            return item.profession == option
        })
        console.log(filteredUsers);

        listOnPage.innerHTML = "";
        filteredUsers.forEach((item) => {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `${item.id} &nbsp;&nbsp; Name: ${item.name} &nbsp; Age: ${item.age}  &nbsp; Profession: ${item.profession}`;
            listOnPage.append(newDiv);
        })
    }
}

function addUser() {

    let name = nameInput.value;
    let profession = professionInput.value;
    let age = ageInput.value;

    if (name != "" && profession != "" && age != "") {

        // create a new obj from the received value and
        let newObj = {
            id: userData.length + 1,
            name,
            profession,
            age
        }

        //  then add it to the existing userData array
        userData.push(newObj);
        console.log(userData)
        listOnPage.innerHTML = "";
        userData.forEach((item) => {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `${item.id} &nbsp;&nbsp; Name: ${item.name} &nbsp; Age: ${item.age}  &nbsp; Profession: ${item.profession}`;
            listOnPage.append(newDiv);
        })
    }
    else {
        alert("Please fill all fields")
    }
}