// Footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Temple Array (10 temples)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba-nigeria-temple.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, USA",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti-utah-temple.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "images/salt-lake-temple.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, USA",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/payson-utah-temple.jpg"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, USA",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "images/laie-hawaii-temple.jpg"
  },
  {
    templeName: "Cardston Alberta",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923, August, 26",
    area: 88919,
    imageUrl: "images/cardston-alberta-temple.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "images/rome-italy-temple.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "images/accra-ghana-temple.jpg"
  },
  {
    templeName: "Kinshasa DRC",
    location: "Kinshasa, Democratic Republic of the Congo",
    dedicated: "2019, April, 14",
    area: 12000,
    imageUrl: "images/kinshasa-temple.jpg"
  },
  {
  templeName: "Monticello Utah",
  location: "Monticello, Utah, USA",
  dedicated: "1998, July, 26",
  area: 9900,
  imageUrl: "images/monticello-utah-temple.jpg"
}
];

const gallery = document.querySelector(".gallery");

// Display Function
function displayTemples(templeList) {
  gallery.innerHTML = "";

  templeList.forEach((temple) => {
    const card = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName + " Temple";
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    card.appendChild(img);
    card.appendChild(caption);

    gallery.appendChild(card);
  });
}

// Show all temples on page load
displayTemples(temples);

// Filters

document.getElementById("home").addEventListener("click", () => {
  displayTemples(temples);
});


document.getElementById("old").addEventListener("click", () => {

  const oldTemples = temples.filter((temple) => {
    const year = Number(temple.dedicated.split(",")[0]);
    return year < 1900;
  });

  displayTemples(oldTemples);

});


document.getElementById("new").addEventListener("click", () => {

  const newTemples = temples.filter((temple) => {
    const year = Number(temple.dedicated.split(",")[0]);
    return year > 2000;
  });

  displayTemples(newTemples);

});


document.getElementById("large").addEventListener("click", () => {

  const largeTemples = temples.filter((temple) => {
    return temple.area > 90000;
  });

  displayTemples(largeTemples);

});


document.getElementById("small").addEventListener("click", () => {

  const smallTemples = temples.filter((temple) => {
    return temple.area < 10000;
  });

  displayTemples(smallTemples);

});