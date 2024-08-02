import React, { useState, useEffect } from 'react';
import css from './Reviews.module.css';
import ReactPaginate from 'react-paginate';

const getColor = rating => {
  if (rating <= 1) return '#FF0000'; // червоний
  if (rating <= 2) return '#FFA500'; // помаранчевий
  if (rating <= 3) return '#FFFF00'; // жовтий
  if (rating <= 4) return '#90EE90'; // світло-зелений
  return '#008000'; // зелений
};

const RatingStars = ({ count, value }) => {
  const stars = [];
  for (let i = 1; i <= count; i++) {
    const color = i <= value ? getColor(value) : 'gray';
    stars.push(
      <span key={i} style={{ color: color }}>
        ★
      </span>
    );
  }
  return <div>{stars}</div>;
};

const Reviews = ({ reviews }) => {
  const [avatars, setAvatars] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 4;

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const avatarsResponse = await fetch(
          'https://randomuser.me/api/?results=4'
        );
        const avatarsData = await avatarsResponse.json();
        const avatars = avatarsData.results.map(user => user.picture.large);
        setAvatars(avatars);
      } catch (error) {
        console.error('Error fetching avatars:', error);
      }
    };

    fetchAvatars();
  }, []);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastReview = (currentPage + 1) * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  return (
    <div className={css.wrapper}>
      {currentReviews.length > 0 &&
        currentReviews.map((review, index) => (
          <div className={css.card} key={index}>
            <div className={css.avatarBlock}>
              {avatars[indexOfFirstReview + index] && (
                <img
                  src={avatars[indexOfFirstReview + index]}
                  alt={`${review.reviewer_name}'s avatar`}
                  className={css.avatar}
                />
              )}
              <div>
                <p className={css.name}>{review.reviewer_name}</p>
                <RatingStars count={5} value={review.reviewer_rating} />
              </div>
            </div>
            <div className={css.commentBlock}>
              {review.gallery && review.gallery.length > 0 && (
                <img
                  className={css.camperPhoto}
                  src={review.gallery[0]}
                  alt="Camper photo"
                />
              )}
              <p className={css.comment}>{review.comment}</p>
            </div>
          </div>
        ))}

      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={css.breakMe}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={css.pagination}
        activeClassName={css.customActive}
        pageClassName={css.customPage}
        previousLinkClassName={css.customPrevNext}
        nextLinkClassName={css.customPrevNext}
      />
    </div>
  );
};

export default Reviews;
