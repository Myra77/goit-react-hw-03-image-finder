import PropTypes from 'prop-types';
import { useEffect }  from "react";
import css from '../Modal/Modal.module.css';


const Modal = ({ onCloseModal, children }) => {
    const handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            onCloseModal();
        }
    };

    useEffect(() => {
        const handleKeydown = e => {
            if (e.code === 'Escape') {
            onCloseModal();
        }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
        window.removeEventListener('keydown', handleKeydown);
    };
    }, [onCloseModal]);

        return (
            <div className={css.Overlay} onClick={handleBackdropClick}>
                <div className={css.Modal}>{children}</div>
            </div>
        );
    };

Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
};

export default Modal;