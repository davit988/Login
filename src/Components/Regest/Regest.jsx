import React from "react";
import { Formik } from "formik";
import * as YUP from "yup";

import "./Regest.css";

export const Regest = () => {
  const validate = YUP.object().shape({
    name: YUP.string().min(3, "min lenght").required("filed is requered"),
    userName: YUP.string().min(3, "min lenght").required("filed is requered"),
    email: YUP.string().email().required("filed is requered"),
    pass: YUP.string().min(3, "min lenght").required("filed is requered"),
    retPass: YUP.string().required("wrong pass"),
  });
  return (
    <header>
      <div className="container">
        <Formik
          initialValues={{
            name: "",
            userName: "",
            email: "",
            pass: "",
            retPass: "",
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
                  {errors.userName && touched.userName && <p>{errors.userName}</p>}
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
                  <p>RetPass</p>
                  <input
                    value={values.retPass}
                    onChange={handleChange}
                    name="retPass"
                    placeholder="Ret Password"
                  />

                  {console.log(values.pass)}
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
