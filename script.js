const URL = 'https://pokeapi.co/api/v2/pokemon/';

function loadPokemon() {
    var id = document.getElementById('input-id');
    var pokemonName = document.getElementById('pokemon-name');

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
    });

}

var button = document.getElementById('submit-button');
button.addEventListener('click', loadPokemon, true);