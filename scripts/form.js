const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor"
    },
    {
        id: "fc-2050",
        name: "Power Supply"
    },
    {
        id: "ac-1000",
        name: "Advanced Computer"
    },
    {
        id: "dc-2000",
        name: "Digital Camera"
    }
];


const select = document.querySelector("#product");


products.forEach(product => {

    let option = document.createElement("option");

    option.value = product.id;

    option.textContent = product.name;

    select.appendChild(option);

});