import React, { useState, useEffect } from 'react';
import styles from './CardAnimation.module.css';
import Loader from 'components/loader/Loader';
import axios from 'axios'; // Імпорт axios для HTTP-запитів

const CardAnimation = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true); // Встановіть початковий стан завантаження на true

  useEffect(() => {
    const fetchCampers = async () => {
      try {
        const response = await axios.get(
          'https://6632bb43f7d50bbd9b473f15.mockapi.io/advert'
        );
        setCampers(response.data.slice(0, 4));
        setLoading(false); // Встановіть loading на false, коли дані завантажено
      } catch (error) {
        console.error('Error fetching campers:', error);
        setLoading(false); // Встановіть loading на false в разі помилки
      }
    };

    fetchCampers();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.module}>
          <div className={styles.header}>
            <h2 className={styles.title}>Most popular campers</h2>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              {campers.map((camper, index) => (
                <label
                  key={index}
                  htmlFor={`c${index + 1}`}
                  className={styles.card}
                  style={{
                    backgroundImage: `url(${
                      camper.gallery && camper.gallery[0]
                    })`,
                  }}
                >
                  <input
                    className={styles.input}
                    type="radio"
                    name="slide"
                    id={`c${index + 1}`}
                    defaultChecked={index === 0} // Перевірте, чи це перший елемент
                  />
                  <div className={styles.row}>
                    <div className={styles.icon}>{index + 1}</div>
                    <div className={styles.description}>
                      <h4 className={styles.h4}>{camper.name}</h4>
                      <p className={styles.p}>{camper.description}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardAnimation;

// import Loader from 'components/loader/Loader';

// const CardAnimation = () => {
//   // const [loading, setLoading] = useState(false);
//   // useEffect(() => {
//   //   const fetchCampers = async () => {
//   //     try {
//   //       const response = await axios.get(
//   //         'https://6632bb43f7d50bbd9b473f15.mockapi.io/advert'
//   //       );
//   //       setCampers(response.data);
//   //       setLoading(false);
//   //     } catch (error) {
//   //       console.error('Error fetching campers:', error);
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchCampers();
//   // }, []);

//   return (
//     <>
//       <div className={styles.module}>
//         <div className={styles.header}>
//           <h2 className={styles.title}>
//             Most popular <br /> campers location
//           </h2>
//         </div>
//         <div className={styles.wrapper}>
//           <div className={styles.container}>
//             <input
//               className={styles.input}
//               type="radio"
//               name="slide"
//               id="c1"
//               defaultChecked
//             />
//             <label htmlFor="c1" className={styles.card}>
//               <div className={styles.row}>
//                 <div className={styles.icon}>1</div>
//                 <div className={styles.description}>
//                   <h4 className={styles.h4}>Winter</h4>
//                   <p className={styles.p}>
//                     Winter has so much to offer - creative and exciting
//                   </p>
//                 </div>
//               </div>
//             </label>
//             <input className={styles.input} type="radio" name="slide" id="c2" />
//             <label htmlFor="c2" className={styles.card}>
//               <div className={styles.row}>
//                 <div className={styles.icon}>2</div>
//                 <div className={styles.description}>
//                   <h4 className={styles.h4}>Summer</h4>
//                   <p className={styles.p}>
//                     Summer has so much to offer - creative and exciting
//                   </p>
//                 </div>
//               </div>
//             </label>
//             <input className={styles.input} type="radio" name="slide" id="c3" />
//             <label htmlFor="c3" className={styles.card}>
//               <div className={styles.row}>
//                 <div className={styles.icon}>3</div>
//                 <div className={styles.description}>
//                   <h4 className={styles.h4}>Fall</h4>
//                   <p className={styles.p}>
//                     Fall has so much to offer - creative and exciting
//                   </p>
//                 </div>
//               </div>
//             </label>
//             <input className={styles.input} type="radio" name="slide" id="c4" />
//             <label htmlFor="c4" className={styles.card}>
//               <div className={styles.row}>
//                 <div className={styles.icon}>4</div>
//                 <div className={styles.description}>
//                   <h4 className={styles.h4}>Spring</h4>
//                   <p className={styles.p}>
//                     Spring has so much to offer - creative and exciting
//                   </p>
//                 </div>
//               </div>
//             </label>
//           </div>
//         </div>
//       </div>
//       )}
//     </>
//   );
// };

// export default CardAnimation;
