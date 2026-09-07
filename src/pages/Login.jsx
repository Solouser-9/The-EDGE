import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Logo from '../components/Logo'
import PasswordField from '../components/PasswordField'
import '../styles/login.css' 

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const registeredEmail = localStorage.getItem('registeredEmail')
  const registeredPassword = localStorage.getItem('registeredPassword')
  const role = localStorage.getItem('role')

  const isLoginValid = email === registeredEmail && password === registeredPassword && registeredEmail !== null

  const handleSubmit = (e) => {
    e.preventDefault()
    if ((isLoginValid) && (role === "Tutor")) {
      navigate('/dashboard')
    }else if ((isLoginValid) && (role === "Student")) {
      navigate('/home')
    }
  }

  return (
    <div className="login-page">
      <main>
        <Logo />
        <section id="form-section">
          <div id="form-container">
            <header id="header">
              <h2>Hi, Welcome Back</h2>
              <h4>Login to continue</h4>
            </header>
            <form id="login-form" onSubmit={handleSubmit}>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">Password</label>
                <PasswordField
                  id="password" 
                  name="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="forgot-text">
                Forgot Password? <Link to="#" className="forgot-link">Reset</Link>
              </p>
              <button 
                type="submit" 
                className="login-btn"
                style={{ 
                  opacity: isLoginValid ? '1' : '0.5', 
                  cursor: isLoginValid ? 'pointer' : 'not-allowed' 
                }}
              >
                Log in
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Login