const mainImage = document.querySelector("#poke-con img");

fetch(`https://pokeapi.co/api/v2/pokemon/35`)
.then(res=>res.json())
.then(json=> {
    console.log(json)
    console.log(json.sprites.other);

})
.catch((err) => console.log(err));

 // API connected to var