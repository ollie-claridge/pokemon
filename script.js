const mainImage = document.querySelector("#poke-con img");

const nameText = document.getElementById("name")
const speciesText = document.getElementById("species")
const weightText = document.getElementById("weight")
const heightText = document.getElementById("height")
const abilitiesList = document.getElementById("abilities-list");
const getPokemon = document.getElementById("get-poke-button");

//utilaty functions
function setImgSrc(imgEl, imgSrc){
    imgEl.setAttribute("src", imgSrc);
}

function setElementText(el, text){
    el.innerText = text;
}

function setAbilities(abilitiesArray){
    let hmtlString =  ``;
    abilitiesArray.forEach((item) => {
        hmtlString += `<li>${item.ability.name}</li>`});
        abilitiesList.innerHTML = hmtlString;
}

const randomPokeIndex = Math.floor(Math.random() * 1000 + 1);

// function createPokemonProfile(pokemon){
//     mainImage.setAttribute("src", json.sprites.other.home.front_default)
//     setElementText(nameText, `NAME: ${pokemon.name}`);
//     setElementText(speciesText, `SPECIES: ${pokemon.species.name}`);
//     setElementText(weightText, `WEIGHT: ${pokemon.weight}`);
//     setElementText(heightText,`HEIGHT: ${pokemon.height}`);
//     setAbilities(pokemon.abilities)
// }

fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokeIndex}`)
.then(res=>res.json())
.then(json=> {
    console.log(json)
    //asigning api call to a value; 
    const pokemon = json;  
    mainImage.setAttribute("src", json.sprites.other.home.front_default)
    setElementText(nameText, `NAME: ${pokemon.name}`);
    setElementText(speciesText, `SPECIES: ${pokemon.species.name}`);
    setElementText(weightText, `WEIGHT: ${pokemon.weight}`);
    setElementText(heightText,`HEIGHT: ${pokemon.height}`);
    setAbilities(pokemon.abilities)
})
.catch((err) => console.log(err));

 // API connected to var 



