const offset = 0;
const limit = 10;
const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

    <div class="detail">
      <ol class="types">
        <li class="type">Grass</li>
        <li class="type">Poison</li>
      </ol>

      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
      alt=${pokemon.name}>
    </div>
     
  </li>
  `;
}


const pokemonList = document.getElementById('pokemonList');


fetch(URL)
  .then((resp) => resp.json())
  .then((jsonBody) => jsonBody.results)
  .then((PokemonList) => {

    for (let i = 0; i < PokemonList.length; i++) {
        const Pokemon = PokemonList[i];
        pokemonList.innerHTML += convertPokemonToLi(Pokemon)
        
    }
  })
  .catch((error) => console.error(error));
