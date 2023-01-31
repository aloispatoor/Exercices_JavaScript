console.log("coucou c'est le Js");

const square = document.querySelector(".square");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    console.log("clicked!");
    square.classList.toggle("blue");

    if(square.classList.contains("blue")){
        btn.innerText = `ROUGE`;
    }else{
        btn.innerText = `BLEU`;
    }
})