import { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';
import { BsSearchHeart } from 'react-icons/bs';

const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

const handleInputChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase())
};

const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
        alert('Please enter request');
        return;
    }
    onSubmit(inputValue);
    setInputValue('');
};
    return(
        <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
            <button type="submit" className={css.SearchFormButton}>
            <BsSearchHeart style={{fontSize: 30}}>Search</BsSearchHeart>
            </button>

            <input
            className={css.SearchFormInput}
            value={inputValue}
            onChange={handleInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
        </form>
        </header>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;