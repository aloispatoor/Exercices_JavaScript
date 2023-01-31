console.log("Et encore coucou :)");

const icon = document.querySelector(".far");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    if(btn.innerText === "Abonnez-vous"){
        btn.innerText = "Abonné•e !";
        btn.classList.add("abonne");
        icon.classList.add("smile");
        icon.classList.replace('fa-meh-blank', 'fa-smile-wink');
    } else {
        btn.innerText = "Abonnez-vous";
        btn.classList.remove("abonne");
        icon.classList.remove("smile");
        icon.classList.replace('fa-smile-wink', 'fa-meh-blank');
    }
})