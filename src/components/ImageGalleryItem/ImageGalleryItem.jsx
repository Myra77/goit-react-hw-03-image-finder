import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../Modal/Modal';

import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ tags, webformatURL, largeImageURL }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModalHandler = () => {
        setShowModal(!showModal);
    };

    // Optionally can be used the code below, 
    // const closeModalHandler = () => {
    //     setShowModal(false);
    // };

    // const openModalHandler = () => {
    //     setShowModal(true);
    // };
    
        return (
            <li className={css.ImageGalleryItem}>
                <img
                    className={css.ImageGalleryItemImage}
                    src={webformatURL}
                    alt={tags}
                    onClick={toggleModalHandler}
            />
            {showModal && (
                <Modal onCloseModal={toggleModalHandler}>
                    <img src={largeImageURL} alt={tags} />
                </Modal>
            )}
            </li>
        );
    };

ImageGalleryItem.propTypes = {
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;