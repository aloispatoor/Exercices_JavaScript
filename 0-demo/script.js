console.log("Bonjour-han");

let score = 0;
console.log(score);
score = 1;
console.log(score);

const prenom = "Gérard";
console.log(prenom);

//Template literals
console.log(`${prenom} a un score de ${score}`);

//RECUPERATION DU DOM
const title = document.getElementById("title");
console.log(title);
//STYLE
title.style.color = "purple";
title.innerText = "Autre Titre";

//Counter et changement de couleurs au click
const square = document.getElementById("square");
const DOMCounter = document.getElementById("counter");
let counter = 0;

function add(){
    counter++;
    DOMCounter.innerText = counter;
    console.log(counter);
}

square.addEventListener("click", function(){
    add();
    if(square.style.backgroundColor === "black"){
        square.style.backgroundColor = "red";
    } else {
        square.style.backgroundColor = "black";
    }
    console.log("clicked!");
})

