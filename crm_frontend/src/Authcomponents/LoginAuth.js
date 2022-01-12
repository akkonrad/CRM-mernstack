import React, {useState}from 'react'
import './LoginAuth.css'


function LoginAuth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    function handleLogin(e) {
        e.preventDefault();
        if (!email || !password ||password.length!=8 ||!email.includes('@')) {
            alert('Please enter your credentials')
            return;
        }
        console.log(email);
        console.log(password);
        
    }
   

    return (
        <div className='login-container bg-info'>
            <div className='login-form'>
                <div className='login-header'>
                    <h2>Login Here</h2>
                </div>
                <div className='login-email'>
                    <div>Email</div>
                    <input type="text" placeholder='User email'onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className='login-password'>
                    <div>Password</div>
                    <input type="text" placeholder='User password' onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <div className='login-btn'>
                    <button type='submit'onClick={handleLogin}>Login</button>
                </div>
                <div className='login-footer'>
                    <label>Don't remember your password?</label>
                </div>



            </div>
        </div>
    )
}

export default LoginAuth
