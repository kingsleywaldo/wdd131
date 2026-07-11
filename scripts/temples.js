// Hamburger menu

const menuButton = document.querySelector("#menuButton");

const navigation = document.querySelector("#navigation");


menuButton.addEventListener("click", () => {


    navigation.classList.toggle("open");


    if (menuButton.textContent === "☰") {

        menuButton.textContent = "❌";

    } else {

        menuButton.textContent = "☰";

    }


});



// Current year

const year = new Date().getFullYear();


document.querySelector("#currentyear").textContent = year;



// Last modified date

document.querySelector("#lastModified").textContent =
document.lastModified;