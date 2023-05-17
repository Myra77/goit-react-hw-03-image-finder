import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css'

export default function ImageGallery({ images }) {
    return (
        <ul className={css.ImageGallery}>
            {images.map(img => (
                <ImageGalleryItem
                    key={img.id}
                    // tags={img.tags}
                    webformatURL={img.webformatURL}
                    largeImageURL={img.largeImageURL}
                />
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
};