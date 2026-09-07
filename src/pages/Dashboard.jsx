import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import '../styles/dashboard.css';

export default function Dashboard() {
  const handleStartSession = () => {
    alert('Starting Quran session...');
  };

  const firstName = localStorage.getItem('firstName')
  const lastName = localStorage.getItem('lastName')
  const Role = localStorage.getItem('role')

  const navigate = useNavigate()
  const logOut = () => {
    navigate('/login')
  }

  return (
    <main className = "dashboard">
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="brand">
            <h1 className="brand-title">The Edge</h1>
            <span className="brand-subtitle">Tutor Portal</span>
          </div>
          <Navbar active="dashboard" />
        </div>
        <div className="sidebar-bottom">
          <div className="user-profile">
            <div className="avatar-placeholder"></div>
            <div className="user-info">
              <span className="user-name">{firstName} {lastName}</span>
              <span className="user-role">{Role}</span>
            </div>
          </div>
          <button className="logout-btn" onClick={logOut}>Logout</button>
        </div>
      </aside>

      <main className="main-content">
        <header className="db-top-header">
          <div><h2 className="db-header-title">Dashboard</h2></div>
        </header>

        <div className="db-welcome-banner">
          <h1>Welcome back, {firstName}👋</h1>
          <p>Here is your teaching overview for today</p>
        </div>

        <div className="db-stats-grid">
          <div className="db-stat-card">
            <div className="db-stat-content">
              <span className="db-stat-number">20</span>
              <span className="db-stat-label">Total Students</span>
            </div>
          </div>
          <div className="db-stat-card">
            <div className="db-stat-content">
              <span className="db-stat-number">0</span>
              <span className="db-stat-label">Active Classes</span>
            </div>
          </div>
          <div className="db-stat-card">
            <div className="db-stat-content">
              <span className="db-stat-number">3</span>
              <span className="db-stat-label">Upcoming Lessons</span>
            </div>
          </div>
          <div className="db-stat-card">
            <div className="db-stat-content">
              <span className="db-stat-number">4</span>
              <span className="db-stat-label">Completed Lessons</span>
            </div>
          </div>
        </div>

        <div className="db-dashboard-grid">
          <div className="db-card">
            <div className="db-card-header">
              <h3>Today’s Schedule</h3>
              <span className="db-date-text">Tuesday, November 3rd, 2025</span>
            </div>
            
            <div className="db-schedule-list">
              <div className="db-schedule-item">
                <div className="db-time-box">
                  <span className="db-time-text">09:00</span>
                  <span className="db-time-period">AM</span>
                </div>
                <div className="db-schedule-details">
                  <h4 className="db-class-title">Quran</h4>
                </div>
                <button className="db-btn db-btn-solid-green" onClick={handleStartSession}>
                  Start Session
                </button>
              </div>

              <div className="db-schedule-item">
                <div className="db-time-box">
                  <span className="db-time-text">12:00</span>
                  <span className="db-time-period">PM</span>
                </div>
                <div className="db-schedule-details">
                  <h4 className="db-class-title">Fiqh</h4>
                </div>
                <button className="db-btn db-btn-outline">View Details</button>
              </div>
            </div>
          </div>

          <div className="db-right-col">
            <div className="db-card">
              <h3>Quick Actions</h3>
              <div className="db-action-items">
                <div className="db-action-item">
                  <div className="db-action-text">
                    <strong>Create New Class</strong>
                    <span>Schedule a session</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="db-card">
              <h3>Notifications</h3>
              <ul className="db-notification-list">
                <li className="db-notification-item">
                  <span className="db-dot db-dot-active"></span>
                  <div className="db-notification-text">
                    <strong>New booking request from Aisha</strong>
                    <span className="db-time-ago">2 mins ago</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
    </main>
  );
}