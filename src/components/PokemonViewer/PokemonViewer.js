import React from 'react';
import PropTypes from 'prop-types';
import styles from './PokemonViewer.module.css';
import PageLoader from '../PageLoader/PageLoader';
import PokemonView from '../PokemonView/PokemonView';

const PokemonViewer = ({ pokemonData, status = 'idle' }) => {
    return (
        <div className={styles.PokemonViewer}>
            <div>
                {status === 'idle' && (
                    <h2>Please search for a pokemon</h2>
                )}
                {status === 'progress' && (
                    <div className={styles.loading}>
                        <h2>Loading: Fetching a pokemon</h2>
                        <PageLoader />
                    </div>
                )}
                {status === 'resolved' && <PokemonView pokemon={pokemonData} />}
                {status === 'error' && (
                    <h2 className={styles.error}>
                        Error: There was an error
                    </h2>
                )}
            </div>
        </div>
    );
};

PokemonViewer.propTypes = {};

export default PokemonViewer;
