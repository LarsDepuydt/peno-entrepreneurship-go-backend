import { Formik, Field, Form } from 'formik';
// most popular open source form library
import * as yup from 'yup';

import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '@/styles/LoginForm.module.css';
import styleB from '@/styles/Buttons.module.css';

import reluLogo from '../../../public/relu-logo-small.png';
//import bcrypt from 'bcryptjs';

import { useQuery, useMutation } from '@tanstack/react-query';
import { register } from '@/gen/proto/threedoclusion/v1/service-ScanService_connectquery';
import { SetStateAction, useEffect, useState } from 'react';

const FormSchema = yup.object().shape({
  reppassword: yup.string().oneOf([yup.ref('password')], 'this does not match your password'),
});

interface RUser {
  firstName: string;
  lastName: string;

  email: string;
  password: string;
  reppassword: string;
}

export default function LoginForm() {
  const [credentials, setData] = useState({ email: '', password: '', firstName: '', lastName: '' });

  const { data } = useQuery(register.useQuery(credentials));

  const router = useRouter();

  const submitFunction = (values: RUser) => {
    console.log(values);

    setData(values);
  };

  useEffect(() => {
    data?.token && credentials.email && router.push('/patient');
  }, [data, credentials]);

  const toLogin = () => router.push('/login-page');

  return (
    <div className={styles.login_box + ' p-3'}>
      <Image className={styles.small_logo_reg} src={reluLogo} alt="relu logo" />

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',

          email: '',
          password: '',
          reppassword: '',
        }}
        validationSchema={FormSchema}
        onSubmit={submitFunction}
      >
        {({ errors }) => (
          <Form className={styles.center}>
            <div className={styles.firstandlast}>
              <div className="mb-3">
                <Field
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  aria-describedby="doctorFirstNameHelp"
                />
              </div>

              <div className="mb-3">
                <Field
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  aria-describedby="doctorLastNameHelp"
                />
              </div>
            </div>

            <div className="mb-3">
              <Field
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <Field
                className="form-control"
                validate
                id="password"
                name="password"
                placeholder="Password"
                type="password"
              />
            </div>

            <div className="mb-3">
              <Field
                className="form-control"
                validation
                id="reppassword"
                name="reppassword"
                placeholder="Repeat Password"
                type="password"
              />
              {errors.reppassword && <b className={styles.error}>{errors.reppassword}</b>}
            </div>

            <div className={styles.spacingbtn}>
              <button type="submit" className={styleB.relu_btn}>
                Register
              </button>
              <button type="button" className={styleB.relu_btn} onClick={toLogin}>
                Login instead
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
