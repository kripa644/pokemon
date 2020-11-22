import { fetchPokemonsURL, fetchAPokemon, fetchTenPokemons } from './api';
import lget from 'lodash/get';
jest.setTimeout(300000);
it('fetchPokemons test', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';
    return fetchPokemonsURL(url).then((json) => {
        expect(json).not.toBeNull();
        let results = json.results;
        expect(results.length).toBe(100);
    });
});

it('fetchAPokemon test - nonexistent', async () => {
    const nonexistent = 'nonexistent';
    return fetchAPokemon(nonexistent).then(
        (json) => {
            expect(json).not.toBeNull();
            const front_default = lget(
                json,
                'sprites.other.official-artwork.front_default'
            );
            expect(front_default).not.toBeUndefined();
        },
        (error) => {
            expect(error).not.toBeNull();
        }
    );
});

it('fetchTenPokemons test', () => {
    return fetchTenPokemons().then((json) => {
        expect(json).not.toBeNull();
        let results = json.results;
        expect(results.length).toBe(10);
    });
});