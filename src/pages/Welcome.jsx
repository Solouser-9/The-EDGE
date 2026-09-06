import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import '../styles/welcome.css'

const Welcome = () => {
  const [selectedRole, setSelectedRole] = useState(null)
  const navigate = useNavigate()

  const handleCardClick = (role) => {
    setSelectedRole(role)
  }

  const handleContinue = () => {
    if (selectedRole) {
      navigate('/signin')
    }
  }

  return (
    <main className="welcome-page">
        <Logo />
        <section>
          <header>
            <h2>Welcome to The Edge</h2>
            <h4>Select your role to get started</h4>
          </header>
          <div id="role-selection">
            <article 
              tabIndex="0" 
              onClick={() => handleCardClick('tutor')}
              style={{ outline: selectedRole === 'tutor' ? '2px solid #000' : 'none' }}
            >
              <div className="role-circle"></div>
              <div>
                <h3>I am a Tutor</h3>
                <p>Create classes <br /> Teach <br /> Manage Student Progress</p>
              </div>
            </article>
            <article 
              tabIndex="0" 
              onClick={() => handleCardClick('student')}
              style={{ outline: selectedRole === 'student' ? '2px solid #000' : 'none' }}
            >
              <div className="role-circle"></div>
              <div>
                <h3>I am a Student</h3>
                <p>Join Classes <br /> Learn <br /> Track Performance</p>
              </div>
            </article>
          </div>
          <div id="continue">
            <button 
              disabled={!selectedRole}
              style={{ 
                opacity: selectedRole ? '1' : '0.5', 
                cursor: selectedRole ? 'pointer' : 'not-allowed' 
              }}
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </section>
    </main>
  )
}

export default Welcome