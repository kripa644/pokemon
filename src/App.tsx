import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchAPokemon, fetchTenPokemons } from './api';
import SearchItem from './components/SearchItem/SearchItem';
import PokemonViewer from './components/PokemonViewer/PokemonViewer';
import HelpFulHints from './components/HelpFulHints/HelpFulHints';
// import ErrorBoundary from 'react-error-boundary';
import ErrorBoundary from './ErrorBoundary';

function App() {
    const [pokemonData, setPokemonData] = useState(undefined);
    const [searchItem, setSearchItem] = useState('');
    const [status, setStatus] = useState('idle');
    const [pokemons, setPokemons] = useState();

    // const pokemon = fetchAPokemon(searchItem);
    useEffect(() => {
        if (searchItem === '') {
            setStatus('idle');
            return;
        }
        setStatus('progress');
        fetchAPokemon(searchItem)
            .then((pokemon) => {
                setPokemonData(pokemon);
                // console.log(pokemonData);
                setStatus('resolved');
            })
            .catch((error) => {
                setStatus('error');
            });
    }, [searchItem]);

    useEffect(() => {
      fetchTenPokemons().then((data) => {
        // console.log(data);
        setPokemons(data.results);
      }).catch((error) => {
        setStatus('error');
      })
    }, []);

    // console.log(pokemons)
    return (
        <div className="App">
            <SearchItem pokemon={searchItem} onSearchClicked={(search) => setSearchItem(search)} />
            <HelpFulHints firstTenPokemons={pokemons} onHintClicked={(search) => setSearchItem(search)}/>
            <ErrorBoundary>
              <PokemonViewer pokemonData={pokemonData} status={status}/>
            </ErrorBoundary>
        </div>
    );
}

export default App;
