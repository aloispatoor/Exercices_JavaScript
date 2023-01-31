console.log("Bonjour-han");

//Methode à la zeub avec des boucles dans des boucles

const chevrons = document.querySelectorAll(".fas");

chevrons.forEach((i) => {
    const questions = document.querySelectorAll(".question");
    i.addEventListener("click", function(){
        console.log("clicked");
        if(i.classList.contains("fa-chevron-down")){
            i.classList.replace("fa-chevron-down", "fa-chevron-up");
            questions.forEach((j) =>{
                console.log(j);
                j = i.parentElement;
                j = j.nextElementSibling;
                j.classList.add("visible");
            })

        }else{
            i.classList.replace("fa-chevron-up", "fa-chevron-down");
            questions.forEach((j) =>{
                j = i.parentElement;
                j = j.nextElementSibling;
                j.classList.remove("visible");
            })
        }
    })
})
