console.log("coucou");

const btn = document.getElementById("btn");
const result = document.getElementById("resultat");

let counter = 0;

function add(){
    counter++;
    console.log(counter);

    if(counter > 1){
        result.innerText = `Vous avez ${counter} produits dans votre panier`;
    }else{
        result.innerText = `Vous avez ${counter} produit dans votre panier`;
    }
}

btn.addEventListener("click", function(){
    add();
})