console.log("Dernier exo");

const form = document.getElementById("form");
const diapo = document.getElementById("diapo");
const input = document.getElementById("input");
const inputValue = input.value.trim();




async function search(query){
    console.log(query);
    try{
        const responseJSON = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${query}`,
            {
                headers: {
                    Authorization: 'Client-ID EsuomzuIbEppRoeAC4JC6MvLdv1paSLdDJDRf_UorWw'
                },

            }
        )
        
        const response = await responseJSON.json();
        console.log(response);
        //IL FAUT ITERER RESULTS CAR C'EST UN ARRAY DANS LA REPONSE
        response.results.forEach((i) => {
            diapo.innerHTML +=   `
                                <div class="imgContainer">
                                    <a href="${i.user.portfolio_url ? i.user.portfolio_url : null}" target=_blank">
                                        <img class="diapoImg" src="${i.urls.small}" alt="${i.alt_description}" />
                                    </a>
                                </div>
                                `
        })
        

    }catch (err){
        console.log(err);
    }


}

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("submitted");

    search(inputValue);
})