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

// Task 3 InnerText

let spanText = document.getElementsByTagName("span");

for (let i = 0; i <= spanText.length; i++) {
    if (spanText[i].innerText == "a Freelancer") {
        console.log("yes it works");
        spanText[i].innerText = "an Employee"
    } 
    if (spanText[i].innerText == "National and International Client") {
        console.log("this also works");
        spanText[i].innerText = "Ineuron Intelligence Private Ltd"
    }
}