import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import * as yup from "yup";
import formSchema from "../../validation/formSchema";
import "../../css/Form.css";
import register1 from "../../assets/images/register1.jpg";

const initialLoginValues = {
    username: '',
    password: ''
}

const initialLoginErrors = {
    username: "",
    password: ""
}

const Login = () => {
    const [login, setLogin] = useState(initialLoginValues)
    const [loginErrors, setLoginErrors] = useState(initialLoginErrors)

    const handleChange = event => {
        setLogin({...login, [event.target.name] : event.target.value})

    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then(() => {
        setLoginErrors({ ...loginErrors, [event.target.name]: "" });
      })
      .catch((error) => {
        setLoginErrors({
          ...loginErrors,
          [event.target.name]: error.errors[0],
        });
      });
    }
    
    const handleSubmit = event => {
        event.preventDefault()

    }

    const isValid = login.username === '' || login.password === ''

    return (
        <section className='container'>
          <img className="formImg" src={register1} alt="loginImg" />
          <form className="userForm" onSubmit={handleSubmit}>
            <div className="formTop">
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

              <h3>Login</h3>
            </div>
          <div>
            <div className="error">{loginErrors.username}</div>
            <input 
              type="text" 
              name="username" 
              id="username" 
              placeholder="Username *" 
              value={login.username} 
              onChange={handleChange} 
            />
            </div>
              <div>
                <div className="error">{loginErrors.password}</div>
                <input 
                  type="text" 
                  name="password" 
                  id="password" 
                  placeholder="Password *" 
                  value={login.password} 
                  onChange={handleChange} 
                />
              </div>
              <div className="formButton">
                {isValid ? (
                  <button disabled={isValid}>Fill All Fields</button>
                ) : (
                  <button disabled={isValid} className='ready'>
                    Login
                  </button>
                )}
                <Link className="link" to="/register">
                  Don't have an account? Register
                </Link>
              </div>
          </form>
      </section>
    )
}

export default Login
