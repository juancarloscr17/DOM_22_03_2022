

let h1 = document.createElement("H1");
let texto = document.createTextNode("Juan Carlos Coronel")
h1.id = "myId";
h1.classList = "colorH1";

// h1.append(texto);//javaScript
// h1.innerText= texto.nodeValue; //javaScript 2
h1.insertAdjacentText("beforeend", texto.nodeValue);

// document.body.append(h1);////javaScript
// document.body.innerHTML = h1.outerHTML;////javaScript 2
document.body.insertAdjacentElement("afterbegin",h1);
console.log(h1);
console.dir(h1);