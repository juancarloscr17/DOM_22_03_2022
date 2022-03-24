
let enviar = async function (url) {
    let peticion = await fetch(url);
    let json = await peticion.json();
    let seleccion = document.querySelector("body > table > tbody");

    let tr = document.createElement("TR");

    let tdId = document.createElement("TD");
    tdId.insertAdjacentText("beforeend",json.id);

    let tdName = document.createElement("TD");
    tdName.insertAdjacentText("beforeend",json.name);

    let tdImg = document.createElement("TD");
    tdImg.classList = "foto"; 
    let Img1 = document.createElement("IMG");
    Img1.classList = "imagen1";
    let Img2 = document.createElement("IMG");
    Img2.classList = "imagen2";
    Img1.src= json.sprites.front_default; 
    Img2.src= json.sprites.back_default;
    tdImg.insertAdjacentElement("beforeend",Img1);
    tdImg.insertAdjacentElement("beforeend",Img2);
   


tr.insertAdjacentElement("beforeend", tdId);
tr.insertAdjacentElement("beforeend", tdName);


// puntos de ataque
ataque:
for(let value of json.stats){
    if(value.stat.name == "attack"){
        let tdAta = document.createElement("TD");
        tdAta.insertAdjacentText("beforeend", value.base_stat);
        tr.insertAdjacentElement("beforeend", tdAta);
        break ataque;
    }
}
tr.insertAdjacentElement("beforeend", tdImg);
seleccion.insertAdjacentElement("beforeend", tr);
} 

for (let i = 1; i <= 200; i++) {
enviar(`https://pokeapi.co/api/v2/pokemon/${i}`);
}
