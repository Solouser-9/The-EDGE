import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import '../styles/onboarding.css';

export default function Step2() {
  const [files, setFiles] = useState({
    id: null,
    academic: null,
    islamic: null,
    photo: null,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleFileChange = (e, key) => {
    if (e.target.files.length > 0) {
      setFiles((prev) => ({
        ...prev,
        [key]: e.target.files[0],
      }));
      setError('');
    }
  };

  const handleNext = () => {
    if (!files.id || !files.academic || !files.islamic || !files.photo) {
      setError('Please upload all required documents before proceeding.');
      return;
    }
    navigate('/availability')
  };

  const handleBack = () => {
    navigate('/successful')
  };

  return (
    <main className = "step2">
    <div className="doc-wrapper">
      <div className="doc-stepper">
        <div className="doc-step">
          <div className="doc-step-circle" style={{width: "44px", height: "44px", backgroundColor: "#8cdd90", borderRadius: "50%", marginBottom: "8px"}}></div>
          <span className="doc-step-num">STEP 1</span>
          <span className="doc-step-label">Profile Information</span>
        </div>
        <div className="doc-step-line"></div>
        <div className="doc-step">
          <div className="doc-step-circle" style={{width: "44px", height: "44px", backgroundColor: "#cf1e1e", borderRadius: "50%", marginBottom: "8px"}}></div>
          <span className="doc-step-num">STEP 2</span>
          <span className="doc-step-label doc-step-label-bold">Documents Upload</span>
        </div>
        <div className="doc-step-line"></div>
        <div className="doc-step">
          <div className="doc-step-circle"></div>
          <span className="doc-step-num">STEP 3</span>
          <span className="doc-step-label">Availability Setup</span>
        </div>
        <div className="doc-step-line"></div>
        <div className="doc-step">
          <div className="doc-step-circle"></div>
          <span className="doc-step-num">STEP 4</span>
          <span className="doc-step-label">Review and Submit</span>
        </div>
      </div>

      <header className="doc-header">
        <h1 className="doc-main-title">Documents Upload</h1>
        <p className="doc-sub-text">
          Please upload your identification and qualification documents. This helps us confirm your teaching credentials.
        </p>
      </header>

      {error && (
        <div style={{ color: '#ef4444', fontWeight: '600', marginBottom: '16px', fontSize: '14px' }}>
          {error}
        </div>
      )}

      <div className="doc-cards-list">
        <div className="doc-card">
          <h2 className="doc-card-title">Government-issued ID <span className="doc-required">*</span></h2>
          <p className="doc-card-desc">For identity verification (e.g. National ID, passport, driver's license)</p>
          <label className="doc-upload-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            <span>{files.id ? files.id.name : 'Add File'}</span>
            <input type="file" className="doc-file-input" onChange={(e) => handleFileChange(e, 'id')} />
          </label>
        </div>

        <div className="doc-card">
          <h2 className="doc-card-title">Academic Certificate <span className="doc-required">*</span></h2>
          <p className="doc-card-desc">Proof of educational background (e.g. Degree, Diploma, NCE, high school certificate)</p>
          <label className="doc-upload-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            <span>{files.academic ? files.academic.name : 'Add File'}</span>
            <input type="file" className="doc-file-input" onChange={(e) => handleFileChange(e, 'academic')} />
          </label>
        </div>

        <div className="doc-card">
          <h2 className="doc-card-title">Arabic and Islamic-related Certificates <span className="doc-required">*</span></h2>
          <p className="doc-card-desc">Proof of Arabic and Islamic-related education (e.g. Quran, Fiqh, e.t.c.)</p>
          <label className="doc-upload-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            <span>{files.islamic ? files.islamic.name : 'Add File'}</span>
            <input type="file" className="doc-file-input" onChange={(e) => handleFileChange(e, 'islamic')} />
          </label>
        </div>

        <div className="doc-card">
          <h2 className="doc-card-title">Profile Photo(Headshot) <span className="doc-required">*</span></h2>
          <p className="doc-card-desc">Clear photo for your tutor profile (helps students identify you)</p>
          <label className="doc-upload-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            <span>{files.photo ? files.photo.name : 'Upload Photo'}</span>
            <input type="file" className="doc-file-input" accept="image/*" onChange={(e) => handleFileChange(e, 'photo')} />
          </label>
        </div>
      </div>

      <div className="doc-nav-bar">
        <button className="doc-btn-back" onClick={handleBack}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          <span>Back</span>
        </button>

        <button className="doc-btn-next" onClick={handleNext}>
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