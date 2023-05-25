import { useState, useEffect } from 'react';

import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import getImages from '../API/fetch';

export const App = () => {
    const [images, setImages] = useState([]);
    const [inputValue, setInputValue] = useState(null);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [totalHits, setTotalHits] = useState(0);

const onSearchSubmit = value => {
    setInputValue(value);
    setPage(1);
};

const incrementPage = () => {
  setPage(prevState => prevState + 1);
};

useEffect(() => {
  if (inputValue) {
    if (page === 1) setImages([]);
    setLoading(true);
    getImages(inputValue, page).then(data => {
      setImages(prev => [...prev, ...data.data.hits]);
      setTotalHits(data.data.totalHits);
    })
    .catch(error => setError(true)).finally(() => {
      setLoading(false);
    });
  }
}, [inputValue, page]);


  return (
    <div>
      <SearchBar onSubmit={onSearchSubmit} />
      {loading && <Loader />}
      {error && <h1>Please try again</h1>}
      {images.length > 0 && (<ImageGallery images={images} />)}
      {images.length > 0 && !loading && images.length < totalHits && (
        <Button onLoadMore={incrementPage} />)}
    </div>
  );
};
