const mainImage = document.querySelector("#poke-con img");

fetch(`https://pokeapi.co/api/v2/pokemon/35`)
.then(res=>res.json())
.then(json=> {
    console.log(json)
    mainImage.setAttribute("src", json.sprites.other.home.front_default)
    console.log(json.sprites.other.home.front_default);

})
.catch((err) => console.log(err));

 // API connected to var