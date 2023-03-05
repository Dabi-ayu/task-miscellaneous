//local storage is a storage located on your browser. jsut on individual browsers
const names = ["dabi","ble","simon"];
localStorage.setItem(names, names);

const submit = document.querySelector(".button");

const username = document.querySelector(".username");

const phone = document.querySelector(".phone");

const email = document.querySelector(".email");
 
var inc = "";

window.onload =  (() =>{

})
var database = JSON.stringify(localStorage.getItem("contacts")) || [];
submit.addEventListener("click", (e) => {
    const userfor = {
        username: username.Value,
        phone: phone.Value,
        email: email.Value,

    }
    
    e.preventDefault();
    
database.push(userfor);
localStorage.setItem("contacts",JSON.stringify(database))
console.log(userfor);
});
