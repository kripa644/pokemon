import React from 'react';
import PropTypes from 'prop-types';
import styles from './HelpFulHints.module.css';

const HelpFulHints = ({firstTenPokemons, onHintClicked = (search) => {}}) => {
    // console.log(firstTenPokemons);
    return (<div className={styles.HelpFulHints}>
        <p>Need a hint? Try</p>
        {firstTenPokemons && firstTenPokemons.map((pokemon, index) => {
            const {name} = pokemon;
            return (
                <a key={index} className={styles.pokemonLinks} href="#" 
                onClick={() => onHintClicked(name)}>
                    {name}{index < firstTenPokemons.length - 1 ? `,` : ''}
                </a>
            );
        })}
    </div>);
};

HelpFulHints.propTypes = {};

export default HelpFulHints;
