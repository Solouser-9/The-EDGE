import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import '../styles/availability.css';

export default function Step3() {
  const [selectedMode, setSelectedMode] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleSelectMode = (mode) => {
    setSelectedMode(mode);
    setError('');
  };

  const handleBack = () => {
    navigate('/onboarding')
  };

  const handleNext = () => {
    if (!selectedMode) {
      setError('Please select a teaching mode before proceeding.');
      return;
    }
    navigate('/login')
  };

  return (
    <main className = "step3">
    <div className="avail-wrapper">
      <div className="avail-stepper">
        <div className="avail-step">
          <div className="avail-step-circle" style={{width: "44px", height: "44px", backgroundColor: "#8cdd90", borderRadius: "50%", marginBottom: "8px"}}></div>
          <span className="avail-step-num">STEP 1</span>
          <span className="avail-step-label">Profile Information</span>
        </div>
        <div className="avail-step-line"></div>
        <div className="avail-step">
          <div className="avail-step-circle" style={{width: "44px", height: "44px", backgroundColor: "#8cdd90", borderRadius: "50%", marginBottom: "8px"}}></div>
          <span className="avail-step-num">STEP 2</span>
          <span className="avail-step-label">Documents Upload</span>
        </div>
        <div className="avail-step-line"></div>
        <div className="avail-step">
          <div className="avail-step-circle" style={{width: "44px", height: "44px", backgroundColor: "#cf1e1e", borderRadius: "50%", marginBottom: "8px"}}></div>
          <span className="avail-step-num">STEP 3</span>
          <span className="avail-step-label avail-step-label-bold">Availability Setup</span>
        </div>
        <div className="avail-step-line"></div>
        <div className="avail-step">
          <div className="avail-step-circle"></div>
          <span className="avail-step-num">STEP 4</span>
          <span className="avail-step-label">Review and Submit</span>
        </div>
      </div>

      <header className="avail-header">
        <h1 className="avail-main-title">Availability Setup</h1>
        <p className="avail-sub-text">
          Tell us your preferred teaching times so we can match you with studently more effectively.
        </p>
      </header>

      {error && (
        <div style={{ color: '#ef4444', fontWeight: '600', marginBottom: '16px', fontSize: '14px' }}>
          {error}
        </div>
      )}

      <div className="avail-form-content">
        <div className="avail-mode-section">
          <label className="avail-section-label">Teaching Mode</label>
          <div className="avail-mode-options">
            <button 
              type="button" 
              className={`avail-mode-btn ${selectedMode === 'online' ? 'avail-mode-selected' : ''}`}
              onClick={() => handleSelectMode('online')}
            >
              Online
            </button>
            <button 
              type="button" 
              className={`avail-mode-btn ${selectedMode === 'in-person' ? 'avail-mode-selected' : ''}`}
              onClick={() => handleSelectMode('in-person')}
            >
              In-Person
            </button>
            <button 
              type="button" 
              className={`avail-mode-btn ${selectedMode === 'both' ? 'avail-mode-selected' : ''}`}
              onClick={() => handleSelectMode('both')}
            >
              Both
            </button>
          </div>
        </div>

        <div className="avail-notes-section">
          <label className="avail-section-label">Availability Notes (Optional)</label>
          <textarea 
            className="avail-notes-area" 
            rows="6"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="avail-nav-bar">
        <button className="avail-btn-back" onClick={handleBack}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          <span>Back</span>
        </button>

        <button className="avail-btn-next" onClick={handleNext}>
          <span>Next</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
    </div>
    </main>
  );
}