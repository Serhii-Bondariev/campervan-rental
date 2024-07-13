import React, { useState } from 'react'; // Додали імпорт useState з React
import css from './MoreInfoBtn.module.css';

const MoreInfoBtn = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false); // Використали useState для стану isOpen

  const toggleInfo = () => {
    setIsOpen(!isOpen); // Змінюємо стан isOpen при кожному кліку
    if (onClick) {
      onClick(); // Викликаємо передану функцію з onClick props
    }
  };

  return (
    <button className={css.moreInfoBtn} onClick={toggleInfo}>
      DETAILS
    </button>
  );
};

export default MoreInfoBtn;
