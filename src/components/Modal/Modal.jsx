import React, { Component }  from "react";
import PropTypes from 'prop-types';
import css from './Modal.module css';


export default class Modal extends Component {
    handleKeydown = e => {
        if (e.key === 'Escape') {
            this.props.onCloseModal();
        }
    };

    handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.onCloseModal();
        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    }
    render() {
        return (
            <div className={css.Overlay} onClick={this.handleBackdropClick}>
                <div className={css.Modal}>{this.props.children}</div>
            </div>
        );
    }
};

Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
};