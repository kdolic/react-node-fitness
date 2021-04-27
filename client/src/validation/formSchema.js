// Here goes the schema for the form
import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .required("*****Username required*****")
    .min(5, "***Username must be at least 5 characters long***"),
  password: yup
    .string()
    .required("*****Password required*****")
    .min(5, "***Password must be at least 5 characters long***"),
  first_name: yup
    .string()
    .required("*****First Name required*****")
    .min(3, "***First Name must be at least 3 characters long***"),
  last_name: yup
    .string()
    .required("*****Last Name required*****")
    .min(3, "***Last Name must be at least 3 characters long***"),
  email: yup
    .string()
    .email("***Enter valid email***")
    .required("*****Email is required*****"),
});

export default formSchema;
