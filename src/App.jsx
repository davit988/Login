import "./App.css";
import { Formik } from "formik";
import { Regest } from "./Components/Regest/Regest";
import * as YUP from "yup";

function App() {
  // const validateSchema = YUP.object().shape({
  //   login: YUP.string()
  //     .min(3, " min lenght")
  //     .max(7, "max lenght")
  //     .required("filed is requered"),
  // });

  return (
    <>
      <Regest />
      {/* <Formik
        initialValues={{
          login: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validateSchema}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <input value={values.login} onChange={handleChange} name="login" />
            {
              errors.login && touched.login && <p>{errors.login}</p>
            }
            <button type="sumbit">Login</button>
          </form>
        )}
      </Formik> */}
    </>
  );
}

export default App;
