import * as Yup from "yup";

export const inputSchemas = Yup.object({
    username: Yup.string().required("Username is required").min(3,"Username must be at least 3 characters long").matches(/^[a-zA-Z0-9]+$/,"Username must be alphanumeric"),
    email : Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required").min(8,"Password must be at least 8 characters long"),
    confirmpassword : Yup.string().required("Confirm Password is required").oneOf([Yup.ref("password")],"Passwords must match"),
})