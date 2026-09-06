import { Link } from "react-router-dom"
import Footer from '../components/Footer'
import '../styles/about.css'
import aboutImage from '../assets/Eren Yeager - Attack on Titan Tattoo Idea.jpg'

const About = () => {
  return (
    <div className="about-page">
  <header className="navbar">
    <div className="logo"><img src = "https://img.icons8.com/ios-filled/50/shopping-cart.png"></img></div>
    <nav className="nav-links">
      <Link to="/article">Article</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/product">Products</Link>
      <Link to="/home">Home</Link>
      <button className="nav-btn">Button</button>
    </nav>
  </header>
  <section className="about-section">
    <div className="about-text-col">
      <h1>About</h1>
      <p className="about-subheading">Subheading for description or instructions</p>
      
      <p className="about-body-text">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
      
      <p className="about-body-text">Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate. Qui international first-class nulla ut. Punctual adpisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat disarming. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.</p>

      <div className="contact-container">
        <h2>Contact me</h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label for="firstName">First name</label>
              <input type="text" id="firstName" placeholder="Jane"></input>
            </div>
            <div className="form-group">
              <label for="lastName">Last name</label>
              <input type="text" id="lastName" placeholder="Smitherton"></input>
            </div>
          </div>
          <div className="form-group">
            <label for="email">Email address</label>
            <input type="email" id="email" placeholder="email@janesfakedomain.net"></input>
          </div>
          <div className="form-group">
            <label for="message">Your message</label>
            <textarea id="message" placeholder="Enter your question or message"></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>

    <div className="about-img-col">
      <img src={aboutImage} alt="Person portrait" className="about-main-img"></img>
    </div>
  </section>
  <Footer/>
  </div>
  )
}

export default About