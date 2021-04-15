const URL = 'https://pokeapi.co/api/v2/pokemon/';
const URL2 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'

function loadPokemon() {
    var id = document.getElementById('input-id');
    var pokemonName = document.getElementById('pokemon-name');
    var pokemonImageCont = document.getElementById('pokemon-image');

    var opts = {
        method: 'GET',//POST,PUT,DELETE,OPTIONS,PATCH        
        headers: {} // JWT-Token, Authentifizierung
        // body: {}
    };

    fetch(URL + id.value, opts)
    .then(function (response) {
        return response.json();
    })
    .then(function (body) {
        pokemonName.innerHTML = body.name;

        var pokemonImage = new Image(200, 200);
        pokemonImage.src= URL2 + id.value + '.png';
        pokemonImageCont.appendChild(pokemonImage);
    });



}

var button = document.getElementById('submit-button');
button.addEventListener('click', loadPokemon, true);

