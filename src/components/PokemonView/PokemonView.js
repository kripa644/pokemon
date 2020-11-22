import React from 'react';
import styles from './PokemonView.module.css';
import lget from 'lodash/get';

const PokemonView = ({ pokemon }) => {
    console.log(pokemon);
    const {abilities, name, id, height, weight, types, moves} = pokemon;
    const pokemonImage = lget(
        pokemon,
        'sprites.other.official-artwork.front_default'
    );
    return (
        <div className={styles.pokemonContainer}>
            <h2>Resource for <span className={styles.pokemonName}>{name}</span></h2>
            <div className={styles.PokemonView}>
                <img
                    className={styles.pokemonImage}
                    src={pokemonImage}
                    alt="pokemon"
                />
                <div className={styles.pokemonData}>
                    <p>Name: {name}</p>
                    <p>ID: {id}</p>
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                    <div className={styles.abilities}>
                        <p>Abilities:</p>
                        <div className={styles.ability}>{abilities.map((ability, index) => {
                        return <p key={index}>{ability.ability.name}{index < abilities.length - 1 ? ',' : ''}</p>
                    })}</div>
                    </div>
                    <div className={styles.types}>
                        <p>Types:</p>
                        <div className={styles.type}>{types.map((type, index) => {
                        return <p key={index}>{type.type.name}{index < types.length - 1 ? ',' : ''}</p>
                    })}</div>
                    </div>
                    {/* <div className={styles.moves}>
                        <p>Moves:</p>
                        <div className={styles.move}>{moves.map((move, index) => {
                        return <p key={index}>{move.move.name}{index < moves.length - 1 ? ',' : ''}</p>
                    })}</div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

PokemonView.propTypes = {};

export default PokemonView;
