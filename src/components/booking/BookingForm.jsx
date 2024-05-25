import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
    <div className="container mx-auto p-4">
      <div className="wrapper mb-4">
        <h3 className="text-xl font-bold">Booking now!</h3>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form space-y-4">
            <div className="form-group">
              <label htmlFor="name" className="block mb-1">
                Name:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block mb-1">
                Email:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="block mb-1">
                Phone:
              </label>
              <Field
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="form-group">
              <label htmlFor="camperType" className="block mb-1">
                Choose camper type:
              </label>
              <Field
                as="select"
                id="camperType"
                name="camperType"
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">Select type</option>
                <option value="Type A">Type A</option>
                <option value="Type B">Type B</option>
                <option value="Type C">Type C</option>
              </Field>
              <ErrorMessage
                name="camperType"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="form-group">
              <label htmlFor="camperEquipment" className="block mb-1">
                Choose camper equipment:
              </label>
              <Field
                as="select"
                id="camperEquipment"
                name="camperEquipment"
                className="w-full px-3 py-2 border rounded"
              >
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
                className="text-red-500 text-sm"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bookingDate" className="block mb-1">
                Booking Date:
              </label>
              <Field
                type="date"
                id="bookingDate"
                name="bookingDate"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bookingTime" className="block mb-1">
                Pickup Time:
              </label>
              <Field
                as="select"
                id="bookingTime"
                name="bookingTime"
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">Select time</option>
              </Field>
              <ErrorMessage
                name="bookingTime"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pickupLocation" className="block mb-1">
                Pickup Location:
              </label>
              <Field
                as="select"
                id="pickupLocation"
                name="pickupLocation"
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">Select location</option>
              </Field>
              <ErrorMessage
                name="pickupLocation"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="form-group">
              <label htmlFor="comment" className="block mb-1">
                Comment:
              </label>
              <Field
                as="textarea"
                id="comment"
                name="comment"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
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
//     phone: '',
//     camperType: '',
//     camperEquipment: '',
//     bookingDate: '',
//     bookingTime: '',
//     pickupLocation: '',
//     comment: '',
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required('Name is required'),
//     email: Yup.string()
//       .email('Invalid email address')
//       .required('Email is required'),
//     phone: Yup.string().required('Phone is required'),
//     camperType: Yup.string().required('Camper type is required'),
//     camperEquipment: Yup.string().required('Camper equipment is required'),
//     bookingDate: Yup.date().required('Booking date is required'),
//     bookingTime: Yup.string().required('Booking time is required'),
//     pickupLocation: Yup.string().required('Pickup location is required'),
//   });

//   const handleSubmit = (values, { setSubmitting }) => {
//     console.log('Form submitted successfully!', values);
//     onClose();
//     setSubmitting(false);
//   };

//   return (
//     <div className={css.container}>
//       <div classNamre={css.wrapper}>
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
//             <div className={css.formGroup}>
//               <label htmlFor="phone">Phone:</label>
//               <Field type="tel" id="phone" name="phone" />
//               <ErrorMessage
//                 name="phone"
//                 component="div"
//                 className={css.error}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="camperType">Choose camper type:</label>
//               <Field as="select" id="camperType" name="camperType">
//                 <option value="">Select type</option>
//                 <option value="Type A">Type A</option>
//                 <option value="Type B">Type B</option>
//                 <option value="Type C">Type C</option>
//               </Field>
//               <ErrorMessage
//                 name="camperType"
//                 component="div"
//                 className={css.error}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="camperEquipment">Choose camper equipment:</label>
//               <Field as="select" id="camperEquipment" name="camperEquipment">
//                 <option value="">Select equipment</option>
//                 <option value="Air conditioner">Air conditioner</option>
//                 <option value="Wheelchair">Wheelchair</option>
//                 <option value="Wheelchair and Air conditioner">
//                   Wheelchair and Air conditioner
//                 </option>
//               </Field>
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
//             <div className={css.formGroup}>
//               <label htmlFor="bookingTime">Pickup Time:</label>
//               <Field as="select" id="bookingTime" name="bookingTime">
//                 <option value="">Select time</option>
//               </Field>
//               <ErrorMessage
//                 name="bookingTime"
//                 component="div"
//                 className={css.error}
//               />
//             </div>
//             <div className={css.formGroup}>
//               <label htmlFor="pickupLocation">Pickup Location:</label>
//               <Field as="select" id="pickupLocation" name="pickupLocation">
//                 <option value="">Select location</option>
//               </Field>
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
