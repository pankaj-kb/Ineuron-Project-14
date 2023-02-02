// Adding li ("Hire Me")

let navItems = document.querySelector("header nav ul");

let newNavLi = document.createElement("li");


let newA = document.createElement("a");
newA.href = "./hire-me.html";
newA.innerText = "Hire Me";

newNavLi.appendChild(newA);

navItems.appendChild(newNavLi);


// Task 2 placeholder text

let inputField = document.querySelector(".search-field input");

inputField.placeholder = "Search My Projects";
