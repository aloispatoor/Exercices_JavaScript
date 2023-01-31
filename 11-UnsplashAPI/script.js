console.log("Re-coucou !");

const btn = document.getElementById("refresh");
const content = document.getElementById("resultat");
const urlAPI = "https://api.unsplash.com/photos/random/?client_id=EsuomzuIbEppRoeAC4JC6MvLdv1paSLdDJDRf_UorWw";

btn.addEventListener('click', function(){
    console.log('clicked!');
    getImg()
})

async function getImg(){
    console.log('getImg OK');
    //LE TRY-CATCH RECUPERE LES ERREURS DU BACK
    try{
        const responseJSON = await fetch(urlAPI);
        const response = await responseJSON.json();
        console.log(response);
    
        content.innerHTML = `
                            <img class="img-artist" src='${response.urls.regular}' alt='${response.alt_description}' />
                            <h1>Artiste : ${response.user.username}</h1>
                            <p>Découvrez son univers : ${response.user.bio ? response.user.bio : 'Désolé, info manquante'}</p>
                            <div class="btn">
                                <a class="btn-insta" target="_blank" href="https://instagram.com/${response.user.instagram_username}">Je découvre</a>
                            </div>
                            `;
    }catch (err){
        console.log(err);
    }
    
}