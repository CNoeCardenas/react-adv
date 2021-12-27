import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    name,
    email,
    password,
    repeatPassword,
    formData,
    isValidEmail,
    onChange,
    resetForm,
  } = useForm({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h1>Register page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email invalido</span>}
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={onChange}
          className={`${password.trim().length <= 0 && "has-error"}`}
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="password"
          placeholder="repeat password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={onChange}
          className={`${repeatPassword.trim().length <= 0 && "has-error"}`}
        />
        {repeatPassword.trim().length <= 0 && (
          <span>Este campo es necesario</span>
        )}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
