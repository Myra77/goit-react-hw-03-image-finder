import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css'

export default class SearchBar extends Component {
    state = {
        inputValue: '',
};

handleInputChange = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase()})
};

handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue.trim() === '') {
        alert('Please enter request');
        return;
    }
    this.props.onSubmit(this.state.inputValue.toLowerCase());
};

render() {
    return(
        <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
            </button>

            <input
            className={css.SearchFormInput}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            />
        </form>
        </header>
    );
}
};

// Searchbar.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// };