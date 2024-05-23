// fetch = Function used for making HTTP requests to fetch resources.

//         (JSON style data, images, files)

//         Simplifies asynchronous data fetching in JavaScript and

//         used for interacting with APIs to retrieve and send

//         data asynchronously over the web.

//         fetch(url, {options})


//options is a bit advanced like, GET, POST, PUT, DELETE. Defualt is GET


async function fetchData(){

    try{

        const pokemonName=document.getElementById("pokemonName").value.toLowerCase();

        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        //now  we have to see if response is OK if it's resolved

        if(!response.ok){

            throw new Error("Could not fetch resource,Maybe you picked the wrong pokemon?");
        }
        const data=await response.json(); //this returns a promise that's why we await
        const pokemonSprite= data.sprites.front_default;

        const imgElement=document.getElementById("pokemonSprite"); //the button
        imgElement.src=pokemonSprite;
        imgElement.style.display="block";


    }
    catch(error){
        
        console.error(error);
    }
}