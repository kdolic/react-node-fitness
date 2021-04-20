import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const initialLoginValues = {
    username: '',
    password: ''
}

const Login = () => {
    const [login, setLogin] = useState(initialLoginValues)

    const handleChange = event => {
        setLogin({...login, [event.target.name] : event.target.value})
    }
    
    const handleSubmit = event => {
        event.preventDefault()

    }

    const isValid = login.username === '' || login.password === ''

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Username:</label>
                    <input type="text" name="username" id="username" placeholder="Username..." value={login.username} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Password:</label>
                    <input type="text" name="password" id="password" placeholder="Password..." value={login.password} onChange={handleChange} />
                </div>
                <div>
                    <button disabled={isValid}>Log In</button>
                    <Link to="/register">Don't have an account? Register</Link>
                </div>
            </form>
        </section>
    )
}

export default Login
