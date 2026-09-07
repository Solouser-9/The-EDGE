import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav-menu">
      <NavLink to="/dashboard" className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn-active' : ''}`.trim()}>
        Dashboard
      </NavLink>
      <NavLink to="/class" className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn-active' : ''}`.trim()}>
        My Classes
      </NavLink>
      <NavLink to="/student" className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn-active' : ''}`.trim()}>
        Students
      </NavLink>
      <NavLink to="" className="nav-btn">Resources</NavLink>
      <NavLink to="" className="nav-btn">Settings</NavLink>
    </nav>
  )
}

export default Navbar