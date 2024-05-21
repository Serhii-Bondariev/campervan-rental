import React from 'react';
import css from './ModalInfo.module.css'; // Підключаємо CSS модуль

const ModalInfo = ({ camper, onClose }) => {
  return (
    <div className={`${css.modal} ${css.overlay}`}>
      {' '}
      {/* Використовуємо класи з CSS модуля */}
      <div className={`${css.modalContent} ${css.modalContentLg}`}>
        <button
          className={`${css.closeButton} ${css.textGray600} ${css.hoverTextGray800}`}
          onClick={onClose}
        >
          <svg
            className={`${css.closeIcon} ${css.w6} ${css.h6}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <h2
          className={`${css.text2xl} ${css.fontBold} ${css.textGray800} ${css.mb4}`}
        >
          {camper.name}
        </h2>
        <img
          src={camper.gallery[0]}
          alt={camper.name}
          className={`${css.image} ${css.wFull} ${css.mb4} ${css.roundedLg}`}
        />
        <p className={`${css.textGray700}`}>{camper.description}</p>
        <ul className={`${css.textGray700} ${css.mt4}`}>
          <li>
            <strong>Price:</strong> ${camper.price}
          </li>
          <li>
            <strong>Location:</strong> {camper.location}
          </li>
          <li>
            <strong>Rating:</strong> {camper.rating}
          </li>
          {/* Додайте інші деталі тут */}
        </ul>
        <div className={`${css.reviews} ${css.mt6}`}>
          <h3 className={`${css.textLg} ${css.fontBold} ${css.mb4}`}>
            Reviews
          </h3>
          {camper.reviews.map((review, index) => (
            <div key={index} className={`${css.mb4}`}>
              <h4
                className={`${css.textBase} ${css.fontBold} ${css.textGray800}`}
              >
                {review.reviewer_name}
              </h4>
              <p className={`${css.textGray700}`}>
                Rating: {review.reviewer_rating}
              </p>
              <p className={`${css.textGray700} ${css.mb2}`}>
                {review.comment}
              </p>
            </div>
          ))}
        </div>
        <div className={`${css.flex} ${css.justifyEnd} ${css.mt6}`}>
          <button
            className={`${css.px4} ${css.py2} ${css.bgBlue500} ${css.textWhite} ${css.roundedMd} ${css.hoverBgBlue600}`}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;

// import React from 'react';

// const ModalInfo = ({ camper, onClose }) => {
//   return (
//     <div className="fixed z-10 inset-0 overflow-y-auto">
//       <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//         <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//           <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//         </div>

//         <span
//           className="hidden sm:inline-block sm:align-middle sm:h-screen"
//           aria-hidden="true"
//         >
//           &#8203;
//         </span>

//         <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//           <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//             <div className="sm:flex sm:items-start">
//               <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                 <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
//                   {camper.name}
//                 </h3>
//                 <div className="mt-2">
//                   <p className="text-sm text-gray-500">
//                     Price: ${camper.price}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Location: {camper.location}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Rating: {camper.rating}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Description: {camper.description}
//                   </p>
//                   <p className="text-sm text-gray-500">Additional Details:</p>
//                   <ul className="list-disc list-inside">
//                     <li>Engine: {camper.engine}</li>
//                     <li>Transmission: {camper.transmission}</li>
//                     <li>Air Conditoner: {camper.details.airConditioner}</li>
//                     <li>Bathroom: {camper.details.bathroom}</li>
//                     <li>Kitchen: {camper.details.kitchen}</li>
//                     <li>Beds: {camper.details.beds}</li>
//                     <li>CD: {camper.details.CD}</li>
//                     <li>Radio: {camper.details.radio}</li>
//                     <li>Shower: {camper.details.shower}</li>
//                     <li>Toilet: {camper.details.toilet}</li>
//                     <li>Freezer: {camper.details.freezer}</li>
//                     <li>Hob: {camper.details.hob}</li>
//                     <li>Microwave: {camper.details.microwave}</li>
//                     <li>Gas: {camper.details.gas}</li>
//                     <li>Water: {camper.details.water}</li>
//                     <h3>Rewiews</h3>
//                     {camper.reviews.map(review => (
//                       <li key={review.id}>{review.text}</li>
//                     ))}
//                     {/* Додайте інші деталі тут */}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//             <button
//               onClick={onClose}
//               type="button"
//               className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalInfo;
