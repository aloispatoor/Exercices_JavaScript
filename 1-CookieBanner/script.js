console.log("coucou");

const cookieBanner = document.querySelector(".cookies");
const btnSuccess = document.querySelector(".btn-success");
console.log(btnSuccess);
console.log(cookieBanner);

btnSuccess.addEventListener("click", function(){
    cookieBanner.style.display = "none";
    console.log("Banner removed");
})