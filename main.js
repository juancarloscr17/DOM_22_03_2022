let div = document.querySelector(".container");
let divCaja2 = document.querySelector(".container > div:nth-child(2)");

// let Mystyle = {
//     background: "orange",
//     color: "#fff",
//     "font-family": "'Roboto', sans-serif"
// };

// Object.assign(divConteiner.style, Mystyle);

divCaja2.classList.add('Mystyle');


// let Mystyle3 = {
//     margin: "auto",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     "font-family": "'Inspiration', cursive",
//     "font-size": "35px",
//     color: "blueviolet",
//     "font-weight": 800,
//     background: "#2be286"
// }
let divCaja3 = document.createElement("DIV");
divCaja3.insertAdjacentText("beforeend", "Circulo 3");
// Object.assign(divCaja3.style, Mystyle3);

div.insertAdjacentElement("beforeend", divCaja3);