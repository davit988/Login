import React from "react";
import { Formik } from "formik";

import "./Regest.css";

export const Regest = () => {
  return (
    <header>
      <div className="container">
        <Formik
          initialValues={{
            name: "",
            srName: "",
            email: "",
            pass: "",
            retPass: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ values, handleChange, handleSubmit }) => (
            <div className="regest">
              <form onSubmit={handleSubmit}>
                <h1>Regest</h1>
                <div>
                  <p>Name</p>
                  <input
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                  />
                </div>
                <div>
                  <p>srName</p>
                  <input
                    value={values.srName}
                    onChange={handleChange}
                    name="srName"
                  />
                </div>
                <div>
                  <p>email</p>
                  <input
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                  />
                </div>
                <div>
                  <p>Pass</p>
                  <input
                    value={values.pass}
                    onChange={handleChange}
                    name="pass"
                  />
                </div>
                <div>
                  <p>RetPass</p>
                  <input
                    value={values.retPass}
                    onChange={handleChange}
                    name="retPass"
                  />
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
