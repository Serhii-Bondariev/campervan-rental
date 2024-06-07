import Loader from 'components/loader/Loader';
import React from 'react';
import css from './Video.module.css';
import BookButton from 'components/buttons/BookButton/BookButton';

const Video = ({ loading }) => {
  return (
    <div className={css.videoContainer}>
      {loading ? (
        <div className={css.loader}>
          <Loader />
        </div>
      ) : (
        <div className={css.videoWrapper}>
          <iframe
            className={css.iframe}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uNbZfd5o1RQ?si=pfmqmlKO_9d1CQP4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className={css.descriptionWrapper}>
            <div className={css.description}>
              <h2>Pariatur at fuga sint!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem laboriosam sapiente eum non, quas voluptatum,
                nemo voluptas deserunt consequuntur quisquam ipsam assumenda
                error. Nostrum, corrupti asperiores similique obcaecati in
                veritatis.
              </p>

              <BookButton className={css.videoBtn} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
