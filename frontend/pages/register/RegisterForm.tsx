import React from 'react';
import { Formik, Field, Form } from 'formik';

const RegisterForm: React.FC = () => {
  return (
    <div>
      <h2>Register</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="name" className="block">
            Full Name
          </label>
          <Field
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 border rounded"
          />

          <label htmlFor="email" className="block mt-4">
            Email
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 border rounded"
          />

          <label htmlFor="password" className="block mt-4">
            Password
          </label>
          <Field
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 border rounded"
          />

          <div className="mt-8">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
