
const PokeApi ={}

function convertPokeApiDetailToPokemon(pokemonDetail){
    
    const pokemon = new Pokemon()
    pokemon.number = pokemonDetail.order
    pokemon.name = pokemonDetail.name
    const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types 
    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default

    return pokemon
}


PokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
          .then((response) => response.json())
          .then(convertPokeApiDetailToPokemon)
}

PokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((resp) => resp.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => pokemonList.map(PokeApi.getPokemonsDetail))
    .then((detailRequest) => Promise.all(detailRequest))
    .then((pokemonDetail) => pokemonDetail)


}