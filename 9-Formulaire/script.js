console.log("Coucou, c'est encore moi, le script.js");

const form = document.getElementById("formulaire");

const prenom = document.getElementById("prenom");

const nom = document.getElementById("nom");

const password = document.getElementById("password");

form.addEventListener("submit", function(e){
    //Empêche le rafraichissement par défaut du navigateur
    e.preventDefault();

    console.log("submitted");

    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const passwordValue = password.value.trim();

    if(prenomValue.length <= 2 || prenomValue.length > 10){
        console.log("erreur dans prénom");
    }else if(nomValue.length <= 2 || nomValue.length > 10){
        console.log("erreur dans nom");
    }else if(passwordValue.length < 8 || passwordValue.length > 15){
        console.log("erreur dans password");
    }else{
        console.log("tout va bien, du coup");
        const item = {
            prenom: prenomValue,
            nom: nomValue,
            password: passwordValue
        };
        console.log(item);
    }
})



