console.log("Hey, comment ça va depuis hier ?");

const btn = document.getElementById("btn");
const result = document.getElementById("resultat");

btn.addEventListener("click", function(){
    console.log("clicked!");

    //Création d'une div class="carre"
    const notif = document.createElement("div");
    notif.classList.add("carre");
    console.log(notif);

    //Placer la div dans result
    result.appendChild(notif);

    //Utilisation du setTimeout()
    setTimeout(function(){
        //Retirer la div du DOM
        notif.remove();
    }, 1000);
})