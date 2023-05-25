import PropTypes from 'prop-types';
import css from '../Button/Button.module.css';

export default function Button({ onLoadMore }) {
    return(
<div className={css.buttonWrapper}>
    <button 
    className={css.button}
    type="button"
    onClick={onLoadMore}>
        Load more
    </button>
</div>
    )
};

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
};