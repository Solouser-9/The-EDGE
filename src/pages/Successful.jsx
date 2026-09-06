import { useNavigate } from 'react-router-dom'
import Logo from "../components/Logo"
import '../styles/successful.css'

const Successful = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }

  return (
    <div className="successful-page">
      <main>
        <Logo />
        <section id="form-section">
          <div id="form-container">
            <header id="header">
              <h2>Verification Successful</h2>
              <svg className="success-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </header>
            <button type="button" className="login-btn" onClick={handleLoginClick}>Continue to Login</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Successful