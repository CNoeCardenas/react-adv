import { Formik, Form } from "formik";
import * as Yup from "yup";

import { MyCheckbox, MySelect, MyTextInput } from "../components";
import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Must be a valid email")
            .required("Required"),
          terms: Yup.boolean()
            .isTrue("Must accept the terms and conditions")
            .required("Required"),
          jobType: Yup.string().required("Required"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Cris..."
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Carde..."
            />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="pedro@gmail.com"
            />
            <MySelect label="Job Type" name="jobType">
              <option value="">Pick sometime</option>
              <option value="dev-jr">Developer Junior</option>
              <option value="dev-senior">Developer Senior</option>
            </MySelect>
            <MyCheckbox label="Terms and conditions" name="terms"></MyCheckbox>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
