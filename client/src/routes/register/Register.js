/* STRETCH
 * submit errors
 * confirm password
 * success checkmark on each input
 * different image with every refresh
 */
import React, {useState} from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import formSchema from "../../validation/formSchema";
import "./Register.css";
import register1 from "../../assets/images/register1.jpg";

const initialRegisterValues = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  email: "",
};
const initialFormErrors = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  email: "",
};

const Register = () => {
  const [register, setRegister] = useState(initialRegisterValues);
  const [registerErrors, setRegisterErrors] = useState(initialFormErrors);

  const handleChange = (event) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
    //// finish on submit errors, works on handlechange////
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then(() => {
        setRegisterErrors({ ...registerErrors, [event.target.name]: "" });
      })
      .catch((error) => {
        setRegisterErrors({
          ...registerErrors,
          [event.target.name]: error.errors[0],
        });
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const isValid =
    register.username === "" ||
    register.password === "" ||
    register.first_name === "" ||
    register.last_name === "" ||
    register.email === "";

  //   const isCorrect =
  //     register.username === register.username ||
  //     register.password === register.password ||
  //     register.first_name === register.first_name ||
  //     register.last_name === register.last_name ||
  //     register.email === register.email;

  return (
    <section className="container">
      <img className="registerImg" src={register1} alt="registerImg" />
      <form className="registerForm" onSubmit={handleSubmit}>
        <div className="registerTop">
          <h1>DevFit</h1>
          {isValid ? (
            <img
              className="lockImg"
              src="https://img.icons8.com/fluent/48/000000/lock.png"
              alt="lockLogo"
            />
          ) : (
            <img
              className="lockImg"
              src="https://img.icons8.com/fluent/48/000000/approved-unlock.png"
              alt="lockLogo"
            />
          )}

          <h3>Register</h3>
        </div>
        <div>
          <div className="error">{registerErrors.username}</div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="  Username *"
            value={register.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="error">{registerErrors.password}</div>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="  Password *"
            value={register.password}
            onChange={handleChange}
          />
        </div>
        <div className="error">{registerErrors.first_name}</div>
        <div>
          <input
            type="text"
            name="first_name"
            id="last_name"
            placeholder="  First Name *"
            value={register.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="error">{registerErrors.last_name}</div>
        <div>
          <input
            type="text"
            name="last_name"
            id="first_name"
            placeholder="  Last Name *"
            value={register.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="error">{registerErrors.email}</div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="  Email *"
            value={register.email}
            onChange={handleChange}
          />
        </div>
        <div className="registerButton">
          {isValid ? (
            <button disabled={isValid}>Fill All Fields</button>
          ) : (
            <button disabled={isValid} onSubmit={handleSubmit}>
              Register
            </button>
          )}
          {/* <button disabled={isValid}>Register</button> */}
          <Link className="link" to="/login">
            Already have an account? Log In
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
