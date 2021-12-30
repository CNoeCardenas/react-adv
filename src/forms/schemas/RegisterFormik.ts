
import * as Yup from "yup";

export const schemaRegisterForm =
    Yup.object({
        name: Yup.string()
            .required("Required")
            .min(2, "Must be 2 characters or more")
            .max(15, "Must be 15 characters or less"),
        email: Yup.string()
            .email("Must be a valid email")
            .required("Required"),
        password: Yup.string()
            .min(6, "Must be 6 characters or more")
            .required("Required"),
        repeatPassword: Yup.string()
            .equals([Yup.ref("password")], "The passwords are not equals")
            .required("Required"),
    })