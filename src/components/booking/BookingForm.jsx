import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css';

const BookingForm = ({ onClose }) => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    camperType: '',
    camperEquipment: '',
    bookingDate: '',
    bookingTime: '',
    pickupLocation: '',
    comment: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    camperType: Yup.string().required('Camper type is required'),
    camperEquipment: Yup.string().required('Camper equipment is required'),
    bookingDate: Yup.date().required('Booking date is required'),
    bookingTime: Yup.string().required('Booking time is required'),
    pickupLocation: Yup.string().required('Pickup location is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form submitted successfully!', values);
    onClose();
    setSubmitting(false);
  };

  return (
    <div className={css.container}>
      <div>
        <h3>Booking now!</h3>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="phone">Phone:</label>
              <Field type="tel" id="phone" name="phone" />
              <ErrorMessage
                name="phone"
                component="div"
                className={css.error}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="camperType">Choose camper type:</label>
              <Field as="select" id="camperType" name="camperType">
                <option value="">Select type</option>
                <option value="Type A">Type A</option>
                <option value="Type B">Type B</option>
                <option value="Type C">Type C</option>
              </Field>
              <ErrorMessage
                name="camperType"
                component="div"
                className={css.error}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="camperEquipment">Choose camper equipment:</label>
              <Field as="select" id="camperEquipment" name="camperEquipment">
                <option value="">Select equipment</option>
                <option value="Air conditioner">Air conditioner</option>
                <option value="Wheelchair">Wheelchair</option>
                <option value="Wheelchair and Air conditioner">
                  Wheelchair and Air conditioner
                </option>
              </Field>
              <ErrorMessage
                name="camperEquipment"
                component="div"
                className={css.error}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="bookingDate">Booking Date:</label>
              <Field type="date" id="bookingDate" name="bookingDate" />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={css.error}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="bookingTime">Pickup Time:</label>
              <Field as="select" id="bookingTime" name="bookingTime">
                <option value="">Select time</option>
                <option value="10:00">10:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">02:00 PM</option>
              </Field>
              <ErrorMessage
                name="bookingTime"
                component="div"
                className={css.error}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="pickupLocation">Pickup Location:</label>
              <Field as="select" id="pickupLocation" name="pickupLocation">
                <option value="">Select location</option>
                <option value="Location A">Location A</option>
                <option value="Location B">Location B</option>
                <option value="Location C">Location C</option>
              </Field>
              <ErrorMessage
                name="pickupLocation"
                component="div"
                className={css.error}
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="comment">Comment:</label>
              <Field as="textarea" id="comment" name="comment" />
            </div>
            <div className={css.formGroup}>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;

// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import css from './BookingForm.module.css';

// const BookingForm = ({ onClose }) => {
//   const initialValues = {
//     name: '',
//     email: '',
//     bookingDate: '',
//     comment: '',
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required('Name is required'),
//     email: Yup.string()
//       .email('Invalid email address')
//       .required('Email is required'),
//     bookingDate: Yup.date().required('Booking date is required'),
//   });

//   const handleSubmit = (values, { setSubmitting }) => {
//     // Ваш код для відправлення форми
//     console.log('Form submitted successfully!', values);
//     onClose();
//     setSubmitting(false);
//   };

//   return (
//     <div className={css.container}>
//       <div>
//         <h3>Booking now!</h3>
//       </div>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form className={css.form}>
//             <div className={css.formGroup}>
//               <label htmlFor="name">Name:</label>
//               <Field type="text" id="name" name="name" />
//               <ErrorMessage name="name" component="div" className={css.error} />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="email">Email:</label>
//               <Field type="email" id="email" name="email" />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className={css.error}
//               />
//             </div>
//             <div>
//               <label htmlFor="phone">Phone:</label>
//               <Field type="tel" id="phone" name="phone" />
//               <ErrorMessage
//                 name="phone"
//                 placeholder="Phone number"
//                 component="div"
//                 className={css.error}
//               />
//             </div>
//             <div>
//               <label htmlFor="Choose camper type">Choose camper type:</label>
//               <select id="camperType" name="camperType"></select>
//               <ErrorMessage
//                 name="camperType"
//                 component="div"
//                 className={css.error}
//               />
//             </div>
//             <div>
//               <label htmlFor="Choose camper equipment">
//                 Choose camper equipment:
//               </label>
//               <select id="camperEquipment" name="camperEquipment">
//                 <option value={camper.form}>Air conditioner</option>
//                 <option value="Wheelchair">Wheelchair</option>
//                 <option value="Wheelchair and Air conditioner">
//                   Wheelchair and Air conditioner
//                 </option>
//               </select>
//               <ErrorMessage
//                 name="camperEquipment"
//                 component="div"
//                 className={css.error}
//               />
//             </div>

//             <div className={css.formGroup}>
//               <label htmlFor="bookingDate">Booking Date:</label>
//               <Field type="date" id="bookingDate" name="bookingDate" />
//               <ErrorMessage
//                 name="bookingDate"
//                 component="div"
//                 className={css.error}
//               />
//             </div>
//             <div>
//               <label htmlFor="bookingTime">Pickup Time:</label>
//               <select id="bookingTime" name="bookingTime"></select>
//               <option value="10:00">10:00 AM</option>
//               <ErrorMessage
//                 name="bookingTime"
//                 component="div"
//                 className={css.error}
//               />
//             </div>
//             <div>
//               <label htmlFor="pickupLocation">Pickup Location:</label>
//               <select id="pickupLocation" name="pickupLocation"></select>
//               <ErrorMessage
//                 name="pickupLocation"
//                 component="div"
//                 className={css.error}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="comment">Comment:</label>
//               <Field as="textarea" id="comment" name="comment" />
//             </div>
//             <div className={css.formGroup}>
//               <button type="submit" disabled={isSubmitting}>
//                 {isSubmitting ? 'Submitting...' : 'Submit'}
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default BookingForm;
