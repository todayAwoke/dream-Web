import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
            <form>
                <input type='text' placeholder="Email" /><br />
                <input type='password' placeholder="Password" /><br />
                <button className="btn" type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;