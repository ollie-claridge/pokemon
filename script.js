const mainImage = document.querySelector("#poke-con img");

fetch(`https://pokeapi.co/api/v2/pokemon/35`).then(.then(res=>res.json()))