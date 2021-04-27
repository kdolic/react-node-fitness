import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import register1 from "../../assets/images/register1.jpg";

const initialRegisterValues = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  email: "",
};

const Register = () => {
  const [register, setRegister] = useState(initialRegisterValues);

  const handleChange = (event) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
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

  return (
    <section className="container">
      <img className="registerImg" src={register1} alt="registerImg" />
      <form className="registerForm" onSubmit={handleSubmit}>
        <div className="registerTop">
          <h1>Name Here</h1>
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
          <input
            type="text"
            name="password"
            id="password"
            placeholder="  Password *"
            value={register.password}
            onChange={handleChange}
          />
        </div>
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
          <button disabled={isValid}>Register</button>
          <Link to="/login">Already have an account? Log In</Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
