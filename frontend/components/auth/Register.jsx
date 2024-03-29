import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import Image from "next/image"

import AuthContext  from '../../context/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();
    const { loading, error, isAuthenticated, login } = useContext(AuthContext);

    useEffect(()=>{
        if(error){
            console.log(error)
        }

        if(isAuthenticated && !loading){
            router.push("/")
        }

    }, [loading, error, isAuthenticated])

    const submitHandler = (e) => {
        e.preventDefault();
        login({username: email, password});
    }

  return (
    <div>
        <div className="modalMask">
      <div className="modalWrapper">
        <div className="left">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image src="/images/login.svg" alt="login" layout="fill"/>
          </div>
        </div>
        <div className="right">
          <div className="rightContentWrapper">
            <div className="headerWrapper">
              <h2> REGISTER</h2>
            </div>
            <form className="form" onSubmit={submitHandler}>
              <div className="inputWrapper">
                <div className="inputBox">
                  <i aria-hidden className="fas fa-envelope"></i>
                  <input type="email" placeholder="Enter Your Email" value ={email} onChange={(e)=>setEmail(e.target.value)} pattern = '\S+@\S+\.\S+' title="Invalid Email" required />
                </div>
                <div className="inputBox">
                  <i aria-hidden className="fas fa-key"></i>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    value ={password} onChange={(e)=>setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className='inputBox'>
                <i aria-hidden className="fas fa-key"></i>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    value ={password} onChange={(e)=>setPassword(e.target.value)}
                    required
                  />
                </div>

              </div>
              <div className="loginButtonWrapper">
                <button type="submit" className="loginButton">
                  {loading ? 'Authenticated...' : 'Login'}
                </button>
              </div>
              <p style={{ textDecoration: "none" }} className="signup">
                Already a user? <a href="/login">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login