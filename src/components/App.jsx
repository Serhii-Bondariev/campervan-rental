// import React, { Suspense, lazy } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';
// // import Catalog from '../pages/catalog/Catalog.jsx';
// // import Favorites from '../pages/favorites/Favorites.jsx';
// // import Navigation from './header/Header.jsx';
// import Footer from './footer/Footer.jsx';
// import FooterMobile from './footerMobile/FooterMobile.jsx';
// // import UserProfile from 'profile/UserProfile.jsx';
// import Spinner from './Spinner/Spinner.jsx';

// const Home = lazy(() => import('../pages/home/Home.jsx'));

// const Catalog = lazy(() => import('../pages/catalog/Catalog.jsx'));

// const Favorites = lazy(() => import('../pages/favorites/Favorites.jsx'));

// const UserProfile = lazy(() => import('profile/UserProfile.jsx'));

// function App() {
//   const isMobile = useMediaQuery({ maxWidth: 768 });

//   const user = {
//     name: 'John Doe',
//     age: 30,
//     phone: '+1 (234) 567-8901',
//     email: 'john.doe@example.com',
//     address: '123 Main St, Springfield',
//     bio: 'Software developer with a passion for open-source projects and teaching.',
//     profilePicture: 'https://randomuser.me/api/portraits/men/20.jpg',
//     favoriteCamper: 'Road Bear',
//   };

//   return (
//     <div>
//       <Navigation />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Suspense fallback={<Spinner />}>
//               <Home />
//             </Suspense>
//           }
//         />
//         <Route
//           path="/catalog"
//           element={
//             <Suspense fallback={<Spinner />}>
//               <Catalog />
//             </Suspense>
//           }
//         />
//         <Route
//           path="/favorites"
//           element={
//             <Suspense fallback={<Spinner />}>
//               <Favorites />
//             </Suspense>
//           }
//         />
//         <Route
//           path="/UserProfile"
//           element={
//             <Suspense fallback={<Spinner />}>
//               <UserProfile user={user} />
//             </Suspense>
//           }
//         />
//         {/* <Route path="/404" element={<NotFound />} /> */}
//         <Route
//           path="*"
//           element={
//             <Suspense fallback={<Spinner />}>
//               <Navigate to="/" />
//             </Suspense>
//           }
//         />
//       </Routes>

//       {isMobile && <FooterMobile />}
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Navigation from './header/Header.jsx'; // Розкоментуйте, якщо необхідно
import Footer from './footer/Footer.jsx';
import FooterMobile from './footerMobile/FooterMobile.jsx';
import Spinner from './Spinner/Spinner.jsx';

const Home = lazy(() => import('../pages/home/Home.jsx'));
const Catalog = lazy(() => import('../pages/catalog/Catalog.jsx'));
const Favorites = lazy(() => import('../pages/favorites/Favorites.jsx'));
const UserProfile = lazy(() => import('../profile/UserProfile.jsx'));

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const user = {
    name: 'John Doe',
    age: 30,
    phone: '+1 (234) 567-8901',
    email: 'john.doe@example.com',
    address: '123 Main St, Springfield',
    bio: 'Software developer with a passion for open-source projects and teaching.',
    profilePicture: 'https://randomuser.me/api/portraits/men/20.jpg',
    favoriteCamper: 'Road Bear',
  };

  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/catalog"
          element={
            <Suspense fallback={<Spinner />}>
              <Catalog />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<Spinner />}>
              <Favorites />
            </Suspense>
          }
        />
        <Route
          path="/UserProfile"
          element={
            <Suspense fallback={<Spinner />}>
              <UserProfile user={user} />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Spinner />}>
              <Navigate to="/" />
            </Suspense>
          }
        />
      </Routes>

      {isMobile && <FooterMobile />}
      <Footer />
    </div>
  );
}

export default App;
