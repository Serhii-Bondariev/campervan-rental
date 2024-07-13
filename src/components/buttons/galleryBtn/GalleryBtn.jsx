import React from 'react';
import css from './GalleryBtn.module.css'; // створіть відповідний CSS файл для стилізації

const GalleryBtn = ({ onClick }) => {
  return (
    <button className={css.galleryBtn} onClick={onClick}>
      Open Gallery
    </button>
  );
};

export default GalleryBtn;
