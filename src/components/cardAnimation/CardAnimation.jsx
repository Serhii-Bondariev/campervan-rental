import React from 'react';
import styles from './CardAnimation.module.css';

const CardAnimation = () => {
  return (
    <div className={styles.module}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Most popular <br /> campers location
        </h2>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <input
            className={styles.input}
            type="radio"
            name="slide"
            id="c1"
            defaultChecked
          />
          <label htmlFor="c1" className={styles.card}>
            <div className={styles.row}>
              <div className={styles.icon}>1</div>
              <div className={styles.description}>
                <h4 className={styles.h4}>Winter</h4>
                <p className={styles.p}>
                  Winter has so much to offer - creative and exciting
                </p>
              </div>
            </div>
          </label>
          <input className={styles.input} type="radio" name="slide" id="c2" />
          <label htmlFor="c2" className={styles.card}>
            <div className={styles.row}>
              <div className={styles.icon}>2</div>
              <div className={styles.description}>
                <h4 className={styles.h4}>Summer</h4>
                <p className={styles.p}>
                  Summer has so much to offer - creative and exciting
                </p>
              </div>
            </div>
          </label>
          <input className={styles.input} type="radio" name="slide" id="c3" />
          <label htmlFor="c3" className={styles.card}>
            <div className={styles.row}>
              <div className={styles.icon}>3</div>
              <div className={styles.description}>
                <h4 className={styles.h4}>Fall</h4>
                <p className={styles.p}>
                  Fall has so much to offer - creative and exciting
                </p>
              </div>
            </div>
          </label>
          <input className={styles.input} type="radio" name="slide" id="c4" />
          <label htmlFor="c4" className={styles.card}>
            <div className={styles.row}>
              <div className={styles.icon}>4</div>
              <div className={styles.description}>
                <h4 className={styles.h4}>Spring</h4>
                <p className={styles.p}>
                  Spring has so much to offer - creative and exciting
                </p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CardAnimation;
