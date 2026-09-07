import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import '../styles/my-classes.css';

const initialClasses = [
  { id: 1, title: 'Quran - Beginner', students: 5, nextLesson: 'August 12', time: '2 pm', status: 'Active' },
  { id: 2, title: 'Hadith - Beginner', students: 5, nextLesson: 'August 12', time: '2 pm', status: 'Active' },
  { id: 3, title: 'Tawheed - Beginner', students: 5, nextLesson: 'August 12', time: '2 pm', status: 'Active' },
  { id: 4, title: 'Siroh - Beginner', students: 5, nextLesson: 'August 12', time: '2 pm', status: 'Active' }
];

export default function MyClasses() {
  const [classes, setClasses] = useState(initialClasses);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this class?')) {
      setClasses(classes.filter((c) => c.id !== id));
    }
  };

  const filteredClasses = classes.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const firstName = localStorage.getItem('firstName')
  const lastName = localStorage.getItem('lastName')
  const Role = localStorage.getItem('role')

  const navigate = useNavigate()
  const logOut = () => {
    navigate('/login')
  }

  return (
    <main className= "myClasses">
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="brand">
            <h1 className="brand-title">The Edge</h1>
            <span className="brand-subtitle">Tutor Portal</span>
          </div>
          <Navbar active="class" />
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
        <header className="mc-top-header">
          <div><h2 className="mc-header-title">My Classes</h2></div>
        </header>

        <div className="mc-banner">
          <h1>My Classes</h1>
          <p>Manage your active and completed classes</p>
        </div>

        <div className="mc-filter-bar">
          <div className="mc-search-wrapper">
            <input 
              type="text" 
              placeholder="Search classes" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="mc-select-wrapper"><select><option>Subject: All</option></select></div>
          <div className="mc-select-wrapper"><select><option>Status: Active</option></select></div>
        </div>

        <div className="mc-classes-grid">
          {filteredClasses.map((cls) => (
            <div className="mc-class-card" key={cls.id}>
              <div className="mc-card-header">
                <h3>{cls.title}</h3>
                <span className="mc-badge mc-badge-active">{cls.status}</span>
              </div>
              <div className="mc-card-body">
                <div className="mc-info-row"><span>Students: {cls.students}</span></div>
                <div className="mc-info-row"><span>Next Lesson: {cls.nextLesson}</span></div>
                <div className="mc-info-row"><span>Time: {cls.time}</span></div>
              </div>
              <div className="mc-card-footer">
                <button className="mc-btn-outline-green">View Class</button>
                <button className="mc-btn-danger" onClick={() => handleDelete(cls.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    </main>
  );
}