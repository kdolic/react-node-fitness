import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const initialRegisterValues = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: ''
}


const Register = () => {
    const [register, setRegister] = useState(initialRegisterValues)

    const handleChange = event => {
        setRegister({...register, [event.target.name] : event.target.value})
    }
    
    const handleSubmit = event => {
        event.preventDefault()

    }

    const isValid = register.username === '' || register.password === '' || register.first_name === '' || register.last_name === '' || register.email === ''

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Username:</label>
                    <input type="text" name="username" id="username" placeholder="Username..." value={register.username} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Password:</label>
                    <input type="text" name="password" id="password" placeholder="Password..." value={register.password} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">First Name:</label>
                    <input type="text" name="first_name" id="last_name" placeholder="First Name..." value={register.first_name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Last Name:</label>
                    <input type="text" name="last_name" id="first_name" placeholder="Last Name..." value={register.last_name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Email..." value={register.email} onChange={handleChange} />
                </div>
                <div>
                    <button disabled={isValid}>Register</button>
                    <Link to="/login">Already have an account? Log In</Link>
                </div>
            </form>
        </section>
    )
}

export default Register
