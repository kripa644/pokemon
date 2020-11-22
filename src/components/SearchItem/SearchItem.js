import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchItem.module.css';

const SearchItem = ({pokemon, onSearchClicked = (search) => {} }) => {
    const [text, setText] = useState('');
    return (
        <div className={styles.SearchItem}>
            <input
                type="search"
                value={pokemon || text}
                className={styles.searchInput}
                onChange={(e) => {
                    onSearchClicked('');
                    setText(e.target.value);
                    // onSearchClicked(e.target.value);
                    }}
                placeholder="Enter Pokemon name"
            />
            <button
                disabled={text === '' && pokemon === ''}
                className={styles.searchButton}
                onClick={() => onSearchClicked(text)}
            >
                submit
            </button>
        </div>
    );
};

SearchItem.propTypes = {};

export default SearchItem;
