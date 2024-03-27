import React from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { TLogin } from '@/utils/types/auth'; // Import your custom types

const Login: React.FC = () => {
  const handleSubmit = (values: TLogin) => {
    console.log(values); // Handle login logic here
  };

  return (
    <div className="max-w-[100vw] p-5">
      <h3 className="mb-5 text-4xl font-medium">Login</h3>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values: TLogin, { setSubmitting }: FormikHelpers<TLogin>) => {
          setTimeout(() => {
            handleSubmit(values);
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className="grid w-96 grid-cols-2 gap-3">
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
