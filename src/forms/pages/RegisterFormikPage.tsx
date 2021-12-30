import { Form, Formik } from "formik";
import "../styles/styles.css";
import { MyTextInput } from "../components";
import { schemaRegisterForm } from "../schemas/RegisterFormik";
export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={schemaRegisterForm}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="name" name="name" placeholder="juan" />
            <MyTextInput
              label="email"
              name="email"
              type="email"
              placeholder="juan@gmail.com"
            />
            <MyTextInput
              label="password"
              name="password"
              type="password"
              placeholder="******"
            />
            <MyTextInput
              label="Repeat password"
              name="repeatPassword"
              type="password"
              placeholder="******"
            />
            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
