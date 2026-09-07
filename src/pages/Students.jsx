import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import '../styles/students.css';

const initialStudents = [
  { id: 1, name: 'Mustopha Adesina', subject: 'Quran', level: 'Beginner', status: 'Active' },
  { id: 2, name: 'Aisha Adeyemi', subject: 'Fiqh', level: 'Advanced', status: 'Active' },
  { id: 3, name: 'Soffiyah Abd Razaq', subject: 'Siroh', level: 'Intermediate', status: 'Completed' },
  { id: 4, name: 'Azeez Abd Hafeez', subject: 'Quran', level: 'Advanced', status: 'Active' },
  { id: 5, name: 'Abdulmalik Zayd', subject: 'Arabic', level: 'Beginner', status: 'Completed' },
  { id: 6, name: 'Badru Zainab', subject: 'Tafsir', level: 'Intermediate', status: 'Active' },
  { id: 7, name: 'AbdulJelil Alaka', subject: 'Quran', level: 'Beginner', status: 'Active' },
];

export default function Students() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = initialStudents.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  const firstName = localStorage.getItem('firstName')
  const lastName = localStorage.getItem('lastName')
  const Role = localStorage.getItem('role')

  const navigate = useNavigate()
  const logOut = () => {
    navigate('/login')
  }

  return (
    <main className = "students">
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="brand">
            <h1 className="brand-title">The Edge</h1>
            <span className="brand-subtitle">Tutor Portal</span>
          </div>
          <Navbar active="student" />
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
        <header className="st-top-header">
          <div>
            <h2 className="st-header-title">Students</h2>
            <p className="st-header-subtitle">View and track students across your classes</p>
          </div>
        </header>

        <div className="st-stats-grid">
          <div className="st-stat-card">
            <div className="st-stat-content">
              <span className="st-stat-number">20</span>
              <span class="st-stat-label">Total Students</span>
            </div>
          </div>
          <div className="st-stat-card">
            <div className="st-stat-content">
              <span className="st-stat-number">11</span>
              <span class="st-stat-label">Active Students</span>
            </div>
          </div>
        </div>

        <div className="st-card st-filter-row">
          <div className="st-filter-left">
            <span className="st-filter-label">Filter by:</span>
            <div className="st-select-wrapper">
              <select><option>Student: All</option></select>
            </div>
            <div className="st-select-wrapper">
              <select><option>Class: All</option></select>
            </div>
          </div>
          <div className="st-search-wrapper">
            <input 
              type="text" 
              placeholder="Search students" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="st-card st-table-card">
          <div className="st-table-responsive">
            <table className="st-students-table">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>SUBJECT</th>
                  <th>LEVEL</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <div className="st-student-user">
                        <div className="st-avatar-placeholder st-table-avatar"></div>
                        <strong>{student.name}</strong>
                      </div>
                    </td>
                    <td>{student.subject}</td>
                    <td>{student.level}</td>
                    <td>
                      <span className={`st-badge ${student.status === 'Active' ? 'st-badge-active' : 'st-badge-completed'}`}>
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
    </main>
  );
}