import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css';

const BookingForm = ({ onClose }) => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    bookingDate: Yup.date().required('Booking date is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Ваш код для відправлення форми
    console.log('Form submitted successfully!', values);
    onClose();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={css.formGroup}>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className={css.error} />
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
  );
};

export default BookingForm;
