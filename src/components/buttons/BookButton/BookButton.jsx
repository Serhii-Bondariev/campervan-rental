import React, { useState } from 'react';
import BookingForm from 'components/modals/booking/BookingForm';

const BookButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
        onClick={openModal}
        type="button"
      >
        Book now!
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-#757272 p-8 rounded-lg shadow-lg w-full max-w-lg">
            <button
              className="absolute top-0 right-0 m-4 text-black"
              onClick={closeModal}
            >
              &times;
            </button>
            <BookingForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookButton;

// import React from 'react';

// const BookButton = ({ openModal }) => {
//   return (
//     <div>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
//         onClick={openModal}
//         type="submit"
//       >
//         Book now!
//       </button>
//     </div>
//   );
// };

// export default BookButton;
