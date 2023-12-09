import React, { useState } from 'react';
import '../../pages/Login/Login.css'
import { useUserData } from '../../context/UserDataContext';

const Login = () => {

    const { userData, logIn } = useUserData()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const handleChange = (e) => {
        setFormData(prev => ({...prev, [e.target.name]:e.target.value}))
        
    };

  
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData)
        await logIn(formData)

    };

    return (
        <div className="login page center">
            <h1>Welcome to the voting App</h1>
            <h2> Please Login</h2>
            <form onSubmit={handleSubmit}>
                
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
