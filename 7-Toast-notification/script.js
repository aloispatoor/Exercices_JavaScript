console.log("Et re-coucou");

const btn = document.querySelector(".btn");
const container = document.querySelector(".container-notifications");

// btn.addEventListener("click", function(){
//     console.log("clicked!");

//     //METHODES JS
//     // const notif = document.createElement("div");
//     // notif.classList.add("toast");
//     // notif.innerHTML = "Enregistrement effectué";
//     // console.log(notif);

//     // container.appendChild(notif);

//     // setTimeout(function(){
//     //     notif.remove();
//     // }, 1000);

//     //METHODES AVEC BACK TICKS
//     const notif = `<div class="toast">
//                         Enregistement effectué
//                     </div>`;

//     container.innerHTML += notif;

//     setTimeout(function(){
//         document.querySelector(".toast").remove();
//     }, 1000);
// })

// SUPPRESSION DE LA DIV AU CLIC
btn.addEventListener('click', function(){
    console.log("clicked!");
    container.innerHTML += `
                            <div class="toast">
                                <div class="close">(x)</div>
                                Enregistré
                            </div>
                            `
    const close = document.querySelectorAll(".close");
    console.log(close);

    close.forEach((i) =>{
        i.addEventListener('click', function(){
            console.log(i);
            const parent = i.parentElement;
            console.log(parent);
            parent.remove();
        })
    })
})