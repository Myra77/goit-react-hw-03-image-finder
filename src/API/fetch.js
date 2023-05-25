import axios from 'axios';

const BASIC_URL = 'https://pixabay.com/api/';
const API_KEY = '35100362-df85f1508e5c064e35d3bf680';


const getImages = (inputValue, page) => {
  return axios.get(
    `${BASIC_URL}?q=${inputValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).catch(
    error => {
      return new Error(error);
    }
  );
};

export default getImages;