console.log("Hey la gang ! On va faire du appel d'API !");

const btn = document.getElementById("btn");
const content = document.getElementById("content");


btn.addEventListener('click', function(){
    console.log('clicked!');
    addText();
})

async function addText(){
    console.log('addText OK');

    const responseJSON = await fetch("https://jsonplaceholder.typicode.com/posts");

    //Conversion JSON to JS
    const responseJS = await responseJSON.json();
    console.log(responseJS);
    //ITERATION DE L'ARRAY JS CREE A PARTIR DU RETOUR EN JSON
    responseJS.forEach((i) => {
        content.innerHTML += `  <ul>
                                    <li>${i.title}</li>
                                </ul>`;

    });
}
