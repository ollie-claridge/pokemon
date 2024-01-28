const mainImage = document.querySelector("#poke-con img");

const nameText = document.getElementById("name");
const speciesText = document.getElementById("species");
const weightText = document.getElementById("weight");
const heightText = document.getElementById("height");
const abilitiesList = document.getElementById("abilities-list");
const getPokemon = document.getElementById("get-poke-button");

//utilaty functions

function setImgSrc(imgEl, imgSrc) {

  imgEl.setAttribute("src", imgSrc);

}

function setElementText(el, text) {
    
  el.innerText = text;
}

function setAbilities(abilitiesArray) {
  let hmtlString = ``;
  abilitiesArray.forEach((item) => {
    hmtlString += `<li>${item.ability.name}</li>`;
  });

  abilitiesList.innerHTML = hmtlString;

}



function createPokemonProfile(pokemon) {
    mainImage.setAttribute("src", pokemon.sprites.other.home.front_default); // Corrected from json to pokemon
    setElementText(nameText, `NAME: ${pokemon.name}`);
    setElementText(speciesText, `SPECIES: ${pokemon.species.name}`);
    setElementText(weightText, `WEIGHT: ${pokemon.weight}`);
    setElementText(heightText, `HEIGHT: ${pokemon.height}`);
    setAbilities(pokemon.abilities);
}

const randomPokeIndex = Math.floor(Math.random() * 1000 + 1);


fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokeIndex}`)
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    //asigning api call to a value;
    const pokemon = json;
    createPokemonProfile(pokemon)
  })
  .catch((err) => console.log(err));

// API connected to var

getPokemon.addEventListener("click", function () {
    
    const randomPokeIndex = Math.floor(Math.random() * 1000 + 1);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokeIndex}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        //asigning api call to a value;
        const pokemon = json;
        createPokemonProfile(pokemon)
      })
      .catch((err) => console.log(err));});

