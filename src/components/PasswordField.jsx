import { useState } from 'react'

const EyeIcon = ({ hidden }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    {hidden ? (
      <>
        <path d="m3 3 18 18" />
        <path d="M10.6 10.7a2 2 0 0 0 2.7 2.7" />
        <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.5 4.2 9.5 7a11.8 11.8 0 0 1-3.1 4.7" />
        <path d="M6.2 6.2A11.8 11.8 0 0 0 2.5 12c1 2.8 4.5 7 9.5 7 1 0 2-.2 2.9-.5" />
      </>
    ) : (
      <>
        <path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    )}
  </svg>
)

const PasswordField = ({ id, name, value, onChange, required = false }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="password-field">
      <input
        type={isVisible ? 'text' : 'password'}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        className="password-toggle"
        aria-label={isVisible ? 'Hide password' : 'Show password'}
        aria-pressed={isVisible}
        onClick={() => setIsVisible(previous => !previous)}
      >
        <EyeIcon hidden={isVisible} />
      </button>
    </div>
  )
}

export default PasswordField