import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import css from './Modal.module.css';

const Modal = ({ onClose, children }) => {
  const [showFullImage, setShowFullImage] = useState(false);

  const handleImageClick = () => {
    setShowFullImage(!showFullImage);
  };

  return ReactDOM.createPortal(
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        {showFullImage ? (
          <img
            src={children.props.src} // Отримуємо src зображення з props дітей
            alt={children.props.alt} // Отримуємо alt зображення з props дітей
            className={css.fullImage}
            onClick={handleImageClick}
          />
        ) : (
          <>
            <button className={css.closeButton} onClick={onClose}>
              ×
            </button>
            {children}
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
