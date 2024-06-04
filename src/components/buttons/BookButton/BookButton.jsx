import React from 'react';

const BookButton = ({ openModal }) => {
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
        onClick={openModal}
        type="submit"
      >
        Book now!
      </button>
    </div>
  );
};

export default BookButton;
