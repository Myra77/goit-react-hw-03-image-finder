import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Modal from '../Modal/Modal';

import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }));
    };
    render() {
        return (
            <li className={css.ImageGalleryItem}>
                <img
                    className={css.ImageGalleryItemImage}
                    src={this.props.webformatURL}
                    alt={this.props.tags}
                    onClick={this.toggleModal}
            />
            {this.state.showModal && (
                <Modal onCloseModal={this.toggleModal}>
                    <img src={this.props.largeImageURL} alt={this.props.tags} />
                </Modal>
            )}
            </li>
        );
    }
};


ImageGalleryItem.propTypes = {
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};