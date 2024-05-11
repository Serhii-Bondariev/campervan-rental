import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  // Додайте інші поля та правила валідації за потреби
});

const MyForm = () => {
  const initialValues = {
    name: '',
    email: '',
    // Додайте інші поля за потреби
  };

  const handleSubmit = values => {
    // Обробка відправлення форми
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        {/* Додайте інші поля форми */}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default MyForm;
