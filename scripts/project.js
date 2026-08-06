// Goodies Bake Concepts
// WDD 131 Final Project JavaScript


// Product data using an array of objects

const products = [
    {
        name: "Birthday Cake",
        price: "₦20,000",
        image: "images/cake1.jpg",
        description: "Beautiful customized cakes for birthdays and celebrations."
    },

    {
        name: "Wedding Cake",
        price: "₦80,000",
        image: "images/weddingcake.jpg",
        description: "Elegant wedding cakes designed for special occasions."
    },

    {
        name: "Fresh Bread",
        price: "₦1,500",
        image: "images/bread.jpg",
        description: "Freshly baked bread made with quality ingredients."
    },

    {
        name: "Pastries",
        price: "₦900",
        image: "images/pastry.jpg",
        description: "Delicious meat pies, doughnuts, and other pastries."
    }
];



// Function to display products

function displayProducts(location) {


    const container = document.getElementById(location);


    if (!container) {

        return;

    }


    products.forEach(product => {


        const card = document.createElement("div");


        card.classList.add("card");


        card.innerHTML = `

            <img src="${product.image}" 
                 alt="${product.name}" 
                 loading="lazy">

            <div class="card-content">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <p class="price">${product.price}</p>

            </div>

        `;


        container.appendChild(card);


    });


}



// Display products on pages

displayProducts("featured-products");

displayProducts("product-list");





// Contact form and localStorage

const contactForm = document.getElementById("contactForm");



if (contactForm) {


    contactForm.addEventListener("submit", function(event) {


        event.preventDefault();



        const customerName = document.getElementById("name").value;



        if (customerName === "") {


            alert("Please enter your name.");


        } else {



            localStorage.setItem("customer", customerName);



            let orders = Number(localStorage.getItem("orders")) || 0;


            orders++;


            localStorage.setItem("orders", orders);



            alert(`Thank you ${customerName}! Your order has been received.`);



            contactForm.reset();


        }


    });


}




// Welcome returning customers

function welcomeCustomer() {


    const customer = localStorage.getItem("customer");



    if (customer) {


        console.log(`Welcome back ${customer}!`);


    } else {


        console.log("Welcome to Goodies Bake Concepts!");

    }


}


welcomeCustomer();





// Count website visits

function countVisits() {


    let visits = Number(localStorage.getItem("visits")) || 0;


    visits++;


    localStorage.setItem("visits", visits);


}


countVisits();