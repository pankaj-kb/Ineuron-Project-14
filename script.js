// Task 2 placeholder text

let inputField = document.querySelector(".search-field input");

inputField.placeholder = "Search My Projects";


let spanText = document.getElementsByTagName("span");

for (let i = 0; i < spanText.length; i++) {
    if (spanText[i].innerText == "a Freelancer") {
        console.log("yes it works");
        spanText[i].innerText = "an Employee"
    }
    if (spanText[i].innerText == "National and International Client") {
        console.log("this also works");
        spanText[i].innerText = "Ineuron Intelligence Private Ltd"
    }
}

// Task 4 img

let myImg = document.querySelector(".hero-right-section img");

myImg.src = "./Assets/passport.jpg"

// Task 5 button

let buttons = document.querySelector(".hero-right-section-btns");

let addButtton = document.createElement("button");

addButtton.innerText = "Support Me";

buttons.appendChild(addButtton);

// Additional

let count = "";

let trackChange = document.querySelector(".progress button");

trackChange.addEventListener("click", () => {
    // Task 3 InnerText
    count++;
    console.log(count);
    if (count == 1) {

        //Task 1 Adding li ("Hire Me")

        trackChange.innerText = "View Task " + count + " Changes";

        let navItems = document.querySelector("header nav ul");

        let newNavLi = document.createElement("li");


        let newA = document.createElement("a");
        newA.href = "./hire-me.html";
        newA.innerText = "Hire Me";

        newNavLi.appendChild(newA);

        navItems.appendChild(newNavLi);
    }

    if (count == 2) {

    }
})