let selecionElento = document.querySelector("body > ul > li:nth-child(3)");
console.log("1",selecionElento);

let selecionAtributos = document.querySelector("#Mylista > li:nth-child(3)");
console.log("2", selecionAtributos);

let numero = 14523;
let selecionDataset = document.querySelectorAll("#Mylista > li");
selecionDataset.forEach(element => {
    if(element.dataset.cc != undefined){
        if(element.dataset.cc.includes(numero) && numero != null){
            console.log("3", element);
        }else if(numero==null){
            console.log("3", element);
        }
    
    }
});