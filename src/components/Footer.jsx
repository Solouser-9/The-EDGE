import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
      <div className="footer-col brand-col">
        <span className="logo">Site name</span>
        <div className="social-icons">
          <Link to ="#" aria-label="Facebook"><img src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="Facebook"></img></Link>
          <Link to ="#" aria-label="Instagram"><img src="https://img.icons8.com/ios-filled/50/instagram-new.png" alt="Instagram"></img></Link>
          <Link to ="#" aria-label="Twitter"><img src="https://img.icons8.com/ios-filled/50/twitter.png" alt="Twitter"></img></Link>
          <Link to ="#" aria-label="GitHub"><img src="https://img.icons8.com/ios-filled/50/github.png" alt="GitHub"></img></Link>
        </div>
      </div>
    <div className="footer-col">
        <h4>Topic</h4>
        <Link to="#">Page</Link>
        <Link to="#">Page</Link>
        <Link to="#">Page</Link>
      </div>
      <div className="footer-col">
        <h4>Topic</h4>
        <Link to ="#">Page</Link>
        <Link to ="#">Page</Link>
        <Link to ="#">Page</Link>
      </div>
      <div className="footer-col">
        <h4>Topic</h4>
        <Link to ="#">Page</Link>
        <Link to ="#">Page</Link>
        <Link to ="#">Page</Link>
      </div>
    </div>
    </footer>
  )
}

export default Footer