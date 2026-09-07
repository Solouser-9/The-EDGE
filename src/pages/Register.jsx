import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import PasswordField from '../components/PasswordField'
import '../styles/register.css' 

const countryCodes = [
  "+1", "+7", "+20", "+27", "+30", "+31", "+32", "+33", "+34", "+36", "+39", "+40", "+41", "+43", "+44", "+45", "+46", "+47", "+48", "+49", "+51", "+52", "+53", "+54", "+55", "+56", "+57", "+58", "+60", "+61", "+62", "+63", "+64", "+65", "+66", "+81", "+82", "+84", "+86", "+90", "+91", "+92", "+93", "+94", "+95", "+98", "+212", "+213", "+216", "+218", "+220", "+221", "+222", "+223", "+224", "+225", "+226", "+227", "+228", "+229", "+230", "+231", "+232", "+233", "+234", "+235", "+236", "+237", "+238", "+239", "+240", "+241", "+242", "+243", "+244", "+245", "+246", "+248", "+249", "+250", "+251", "+252", "+253", "+254", "+255", "+256", "+257", "+258", "+260", "+261", "+262", "+263", "+264", "+265", "+266", "+267", "+268", "+269", "+290", "+291", "+297", "+298", "+299", "+350", "+351", "+352", "+353", "+354", "+355", "+356", "+357", "+358", "+359", "+370", "+371", "+372", "+373", "+374", "+375", "+376", "+377", "+378", "+380", "+381", "+382", "+385", "+386", "+387", "+389", "+420", "+421", "+423", "+500", "+501", "+502", "+503", "+504", "+505", "+506", "+507", "+508", "+509", "+590", "+591", "+592", "+593", "+594", "+595", "+596", "+597", "+598", "+599", "+670", "+672", "+673", "+674", "+675", "+676", "+677", "+678", "+679", "+680", "+681", "+682", "+683", "+685", "+686", "+687", "+688", "+689", "+690", "+691", "+692", "+850", "+852", "+853", "+855", "+856", "+880", "+886", "+960", "+961", "+962", "+963", "+964", "+965", "+966", "+967", "+968", "+970", "+971", "+972", "+973", "+974", "+975", "+976", "+977", "+992", "+993", "+994", "+995", "+996", "+998"
];

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countrySelect: '+1',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, name, type, value, checked } = e.target
    const fieldName = id || name
    setFormData(prev => ({
      ...prev,
      [fieldName]: type === 'checkbox' ? checked : value
    }))
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const isEmailValid = emailRegex.test(formData.email)
  const areFieldsFilled = formData.firstName.trim() && 
                          formData.lastName.trim() && 
                          formData.email.trim() && 
                          formData.phone.trim() && 
                          formData.password.trim() && 
                          formData.confirmPassword.trim()
  const doPasswordsMatch = formData.password === formData.confirmPassword && formData.password !== ''
  const isFormValid = areFieldsFilled && isEmailValid && doPasswordsMatch && formData.terms

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid) {
      localStorage.setItem('registeredEmail', formData.email)
      localStorage.setItem('registeredPassword', formData.password)
      localStorage.setItem('lastName', formData.lastName)
      localStorage.setItem('firstName', formData.firstName)
      navigate('/verification')
    }
  }

  return (
    <div className="register-page">
      <main>
        <Logo />
        <section id="form-section">
          <div id="form-container">
            <header id="header">
              <h2>Create an Account</h2>
              <h4>Please enter your details to get started</h4>
            </header>
            <form id="signup-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  required 
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  required 
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="full-width">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="full-width">
                <label htmlFor="phone">Phone Number</label>
                <div className="input-group">
                  <select 
                    id="countrySelect" 
                    className="country-select"
                    value={formData.countrySelect}
                    onChange={handleChange}
                  >
                    {countryCodes.map(code => (
                      <option key={code} value={code}>{code}</option>
                    ))}
                  </select>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <PasswordField
                  id="password" 
                  name="password" 
                  required 
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <PasswordField
                  id="confirmPassword" 
                  name="confirmPassword" 
                  required 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="terms full-width">
                <input 
                  type="checkbox" 
                  id="terms" 
                  name="terms" 
                  required 
                  checked={formData.terms}
                  onChange={handleChange}
                />
                <label htmlFor="terms">I agree to the Terms of Service & Privacy Policy</label>
              </div>
              <button 
                type="submit" 
                className="submit-btn full-width"
                style={{ 
                  opacity: isFormValid ? '1' : '0.5', 
                  cursor: isFormValid ? 'pointer' : 'not-allowed' 
                }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Register