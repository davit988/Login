import { Formik } from "formik";
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
          onSubmit={(values) => console.log(values)}
          validationSchema={validate}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <div className="regest">
              <form onSubmit={handleSubmit}>
                <h1>Regest</h1>
                <div className="reg">
                  <p>Name</p>
                  <input
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="Write Your Name"
                  />
                  {errors.name && touched.name && <p>{errors.name}</p>}
                </div>
                <div className="reg">
                  <p>userName</p>
                  <input
                    value={values.userName}
                    onChange={handleChange}
                    name="userName"
                    placeholder="Write Your User Name"
                  />
                  {errors.userName && touched.userName && (
                    <p>{errors.userName}</p>
                  )}
                </div>
                <div className="reg">
                  <p>email</p>
                  <input
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Write Your email"
                  />
                  {errors.email && touched.email && <p>{errors.email}</p>}
                </div>
                <div className="reg">
                  <p>Pass</p>
                  <input
                    value={values.pass}
                    onChange={handleChange}
                    name="pass"
                    placeholder="Password"
                  />
                  {errors.pass && touched.pass && <p>{errors.pass}</p>}
                </div>
                <div className="reg">
                  <p>confirm Password</p>
                  <input
                    value={values.confirmPassword}
                    onChange={handleChange}
                    name="confirmPassword"
                    placeholder="confirm Password"
                  />

                  {touched.confirmPassword && errors.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                  )}
                </div>
                <button type="sumbit">Regest</button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </header>
  );
};
