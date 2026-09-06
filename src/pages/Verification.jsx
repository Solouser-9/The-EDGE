import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import '../styles/verification.css' 

const Verification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef([])
  const navigate = useNavigate()

  const isComplete = otp.every(val => /^\d$/.test(val))

  const handleChange = (e, index) => {
    const value = e.target.value
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      if (value && index < 5) {
        inputRefs.current[index + 1].focus()
      }
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isComplete) {
      navigate('/successful')
    }
  }

  return (
    <div className="verification-page">
      <main>
        <Logo />
        <section id="form-section">
          <div id="form-container">
            <header id="header">
              <h2>Email Verification</h2>
              <h4>Enter the 6-digit code sent to your email.</h4>
            </header>
            <form id="verify-form" onSubmit={handleSubmit}>
              <div className="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    pattern="[0-9]"
                    required
                    value={digit}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
              </div>
              <p className="resend-text">
                Didn't receive the code? <a href="#" className="resend-link">Resend</a>
              </p>
              <button 
                type="submit" 
                className="verify-btn"
                style={{ 
                  opacity: isComplete ? '1' : '0.5', 
                  cursor: isComplete ? 'pointer' : 'not-allowed' 
                }}
              >
                Verify
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Verification