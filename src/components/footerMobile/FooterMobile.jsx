import React, { useState, useEffect } from 'react';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import LogoImg from 'components/logoImg/LogoImg';
import css from './FooterMobile.module.css';
import MobileMenuModal from 'components/mobileMenuModal/MobileMenuModal';
import { FaBars, FaTimes } from 'react-icons/fa';

const FooterMobile = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const icon = isMobileMenuOpen ? <FaTimes /> : <FaBars />;

  const renderMobileMenu = () => {
    if (isMobileMenuOpen) {
      return (
        <MobileMenuModal isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      );
    }
  };
  return (
    <div className={css.mobileNavigation}>
      <div className={css.navigationList}>
        <div className={css.navigationItem}>
          <NavLink to="/" className={css.navigationLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
            >
              <path
                d="M4 3V7.5M4 7.5L8.46983 1.91266C9.26025 0.92463 10.758 0.909651 11.568 1.88168L18.6332 10.3599C19.176 11.0112 18.7128 12.0001 17.865 12.0001H16V16.0001C16 17.1046 15.1046 18.0001 14 18.0001H5.99999C4.89543 18.0001 4 17.1046 3.99999 16.0001L3.99997 12.0001H2.22682C1.36397 12.0001 0.906166 10.9806 1.4794 10.3357L4 7.5Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span>Home</span>
          </NavLink>
        </div>
        <div className={css.navigationItem}>
          <NavLink to="/favorites" className={css.navigationLink}>
            <svg
              stroke="white"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="20px"
              width="19px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M128 80V64a48.14 48.14 0 0 1 48-48h224a48.14 48.14 0 0 1 48 48v368l-80-64"
              ></path>
              <path
                fill="none"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M320 96H112a48.14 48.14 0 0 0-48 48v352l152-128 152 128V144a48.14 48.14 0 0 0-48-48z"
              ></path>
            </svg>

            <span>Favorite</span>
          </NavLink>
        </div>
        <div className={css.navigationItem}>
          <NavLink
            to="/"
            className={css.navigationLink}
            onClick={MobileMenuModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
            >
              <path
                d="M0.5 1C0.5 0.447715 0.798477 0 1.16667 0H15.8333C16.2015 0 16.5 0.447715 16.5 1C16.5 1.55228 16.2015 2 15.8333 2H1.16667C0.798477 2 0.5 1.55228 0.5 1Z"
                fill="#ffffff"
              ></path>
              <path
                d="M0.5 7C0.5 6.44772 0.798477 6 1.16667 6H15.8333C16.2015 6 16.5 6.44772 16.5 7C16.5 7.55228 16.2015 8 15.8333 8H1.16667C0.798477 8 0.5 7.55228 0.5 7Z"
                fill="#ffffff"
              ></path>
              <path
                d="M0.5 13C0.5 12.4477 0.798477 12 1.16667 12H15.8333C16.2015 12 16.5 12.4477 16.5 13C16.5 13.5523 16.2015 14 15.8333 14H1.16667C0.798477 14 0.5 13.5523 0.5 13Z"
                fill="#ffffff"
              ></path>
            </svg>
            <span>Menu</span>
          </NavLink>
        </div>
        <div className={css.navigationItem}>
          <NavLink to="/UserProfile" className={css.navigationLink}>
            <svg
              stroke="white"
              fill="white"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M4 18v-.65c0-.34.16-.66.41-.81C6.1 15.53 8.03 15 10 15c.03 0 .05 0 .08.01.1-.7.3-1.37.59-1.98-.22-.02-.44-.03-.67-.03-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.42-.6-.75-1.28-.97-2H4zM10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
            </svg>
            <span>Profile</span>
          </NavLink>
        </div>
        <div className={css.navigationItem}>
          <NavLink to="/" className={css.navigationLink}>
            <svg
              viewBox="0 0 25 20"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m17.973 6.6669c-0.4431-0.47619-0.8862-0.79366-1.4769-1.0318-0.5908-0.2381-1.1816-0.39683-1.8462-0.39683-1.2554 0-2.5108 0.47619-3.4708 1.6667l1.3292 0.87302c0.5908-0.55555 1.3293-0.87302 2.1416-0.87302 0.8861 0 1.6246 0.31747 2.2154 0.95239s0.96 1.4286 0.96 2.381c0 0.5556-0.2215 1.1905-0.4431 1.746l0.96 1.4286c0.6646-0.873 1.0339-1.9841 1.0339-3.1746 0-0.71429-0.1477-1.3492-0.3693-1.9048-0.2215-0.71429-0.5907-1.1905-1.0338-1.6667z"
                fill="#fff"
              ></path>
              <path
                d="m18.49 13.333c0.2215 0.635 0.3692 1.2699 0.3692 1.9048 0 1.2698-0.443 2.381-1.2554 3.3333-0.8123 0.9524-1.8461 1.4286-3.0277 1.4286h-3.4215v-1.5873h3.4215c0.7385 0 1.4031-0.3968 1.92-0.9524 0.517-0.5555 0.8124-1.3492 0.8124-2.1428 0-0.8731-0.2954-1.5873-0.8862-2.2223-0.5908-0.6349-1.2554-0.9523-2.0677-0.9523h-1.4769c-0.0739 0-0.1477-0.0794-0.1477-0.1588l-0.0739-0.5555c-0.0738-1.0318-0.5169-1.9048-1.2554-2.6191-0.7384-0.71429-1.5508-1.0318-2.5846-1.0318s-1.8462 0.31746-2.5846 1.0318c-0.73846 0.71428-1.1077 1.5873-1.2554 2.6191l-0.07385 0.5555c0 0.0794-0.07384 0.1588-0.14769 0.1588l-0.44308 0.0793c-0.73846 0.0794-1.4031 0.3968-1.8462 1.0318-0.36924 0.5555-0.66462 1.1904-0.66462 1.9841s0.29538 1.5873 0.81231 2.1429c0.51693 0.7143 1.1816 1.0317 1.9939 1.0317h6.5478v1.5873h-6.5478c-1.1816-0.0793-2.2154-0.5555-3.0277-1.5079-0.88616-0.873-1.3292-1.9842-1.3292-3.254 0-1.1111 0.29539-2.0635 0.96001-2.9365 0.66461-0.873 1.4769-1.4286 2.4369-1.6667 0.29539-1.2698 0.88616-2.381 1.8462-3.254 0.96-0.87302 2.0677-1.2698 3.3969-1.2698 0.88616 0 1.6984 0.2381 2.437 0.63493 0 0 0.8861 0.55555 1.2554 0.95238 0.8123 0.87302 1.2554 1.746 1.4769 2.8571h0.2954c1.1815 0 2.2154 0.4762 3.1016 1.4286 0.3692 0.3175 0.6646 0.7937 1.0338 1.3492z"
                fill="#fff"
              ></path>
              <path
                d="m23.512 10.952h-1.92c-0.3692 0-0.7385-0.3174-0.7385-0.7936s0.3693-0.79367 0.7385-0.79367h1.92c0.3692 0 0.7385 0.31747 0.7385 0.79367s-0.3693 0.7936-0.7385 0.7936z"
                fill="#fff"
              ></path>
              <path
                d="m9.1853 5.0001c-0.22154 0-0.36923-0.07936-0.51692-0.23809l-0.66462-0.63493c-0.29539-0.31746-0.29539-0.79365 0-1.1111 0.29538-0.31746 0.73846-0.31746 1.0338 0l0.59077 0.63492c0.29539 0.31746 0.29539 0.79365 0 1.1111-0.07385 0.15873-0.29539 0.23809-0.44308 0.23809z"
                fill="#fff"
              ></path>
              <path
                d="m21.903 17.222c-0.2216 0-0.3692-0.0793-0.5169-0.2381l-0.6647-0.6349c-0.2953-0.3175-0.2953-0.7936 0-1.1111 0.2954-0.3175 0.7385-0.3175 1.0339 0l0.5908 0.6349c0.2954 0.3175 0.2954 0.7937 0 1.1111-0.0739 0.1588-0.2954 0.2381-0.4431 0.2381z"
                fill="#fff"
              ></path>
              <path
                d="m14.872 3.6508c-0.3693 0-0.7385-0.31746-0.7385-0.79366v-2.0635c0-0.39683 0.3692-0.79365 0.7385-0.79365 0.3692 0 0.7384 0.39683 0.7384 0.79365v2.0635c0 0.39683-0.2954 0.79366-0.7384 0.79366z"
                fill="#fff"
              ></path>
              <path
                d="m19.598 5.7937c-0.2215 0-0.3692-0.07937-0.5169-0.2381-0.2954-0.31746-0.2954-0.79365 0-1.1111l1.3293-1.4286c0.2953-0.31746 0.7384-0.31746 1.0338 0s0.2954 0.79365 0 1.1111l-1.3292 1.4286c-0.1477 0.15873-0.3693 0.2381-0.517 0.2381z"
                fill="#fff"
              ></path>
            </svg>
            <span>Weather</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
