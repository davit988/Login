import { Formik, Field, ErrorMessage, Form } from "formik";
import { validate } from "../../Schema/Schema";
import { User } from "../User/User";

import "./Regest.css";

export const Regest = () => {
  return (
    <header>
      <div className="container">
        <Formik
          initialValues={{
            name: "",
            userName: "",
            email: "",
            pass: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => <User name={values.userName} />}
          validationSchema={validate}
        >
          <div className="regest">
            <Form>
              <h1>Regest</h1>
              <div className="reg">
                <p>Name</p>
                <Field name="name" placeholder="Write Your Name" />
                <ErrorMessage name="name">{(msg) => <p>{msg}</p>}</ErrorMessage>
              </div>

              <div className="reg">
                <p>userName</p>
                <Field name="userName" placeholder="Write Your User Name" />
                <ErrorMessage name="userName">
                  {(msg) => <p>{msg}</p>}
                </ErrorMessage>
              </div>

              <div className="reg">
                <p>email</p>
                <Field name="email" placeholder="Write Your email" />
                <ErrorMessage name="email">
                  {(msg) => <p>{msg}</p>}
                </ErrorMessage>
              </div>

              <div className="reg">
                <p>Pass</p>
                <Field name="pass" placeholder="Password" />
                <ErrorMessage name="pass">{(msg) => <p>{msg}</p>}</ErrorMessage>
              </div>

              <div className="reg">
                <p>confirm Password</p>
                <Field name="confirmPassword" placeholder="confirm Password" />
                <ErrorMessage name="confirmPassword">
                  {(msg) => <p>{msg}</p>}
                </ErrorMessage>
              </div>
              <button type="sumbit">Regest</button>
            </Form>
          </div>
        </Formik>
      </div>
    </header>
  );
};
