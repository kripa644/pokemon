const BASE_URL = 'https://pokeapi.co/api/v2/';

async function fetchPokemonsURL(url) {
    let response = await fetch(url);

    if (response.ok) {
        // if HTTP-status is 200-299
        return response.json();
    } else {
        // alert("HTTP-Error: " + response.status);
        throw new Error('HTTP-Error: ' + response.status);
    }
}

async function fetchAPokemon(pokemonName) {
    const pokemonURL = `${BASE_URL}pokemon/${pokemonName}`;
    return await fetchPokemonsURL(pokemonURL);
}

async function fetchTenPokemons() {
    const pokemonURL = `${BASE_URL}pokemon?limit=10&offset=200`;
    return await fetchPokemonsURL(pokemonURL);
}

export { fetchPokemonsURL, fetchAPokemon, fetchTenPokemons };
