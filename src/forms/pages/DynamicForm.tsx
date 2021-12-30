import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";
import formJson from "../data/custom-form.json";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};
for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;
  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required(rule.message);
    }
    if (rule.type === "minLength") {
      schema = schema.min(rule.value ?? 2, rule.message);
    }
    if (rule.type === "email") {
      schema = schema.email(rule.message);
    }
  }
  requiredFields[input.name] = schema;
}
const validationSchema = Yup.object({ ...requiredFields });
export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "text" || type === "password" || type === "email")
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  ></MyTextInput>
                );
              else if (type === "select")
                return (
                  <MySelect key={name} label={label} name={name}>
                    {options?.map((opt) => (
                      <option value={opt.id} key={opt.id}>
                        {opt.description}
                      </option>
                    ))}
                  </MySelect>
                );

              return <span key={name}>No soporto ese type: {type}</span>;
            })}
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
