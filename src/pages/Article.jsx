import { Link } from "react-router-dom"
import Footer from '../components/Footer'
import '../styles/article.css'

const Article = () => {
  return (
    <div className="article-page">
  <header className="navbar">
    <div className="logo">TE</div>
    <nav className="nav-links">
      <Link to="/home">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/product">Product</Link>
      <Link to="/about">About</Link>
      <button className="nav-btn">Button</button>
    </nav>
  </header>
  <section className="hero article-hero">
    <div className="hero-content">
      <h1>Article or post title</h1>
      <p>Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading.</p>
    </div>
  </section>
  <section className="content-section article-main-img-section">
    <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80" alt="Article featured image" className="article-hero-img"></img>
  </section>
  <section className="content-section article-text-section">
    <div className="article-text-container">
      <p className="lead-text">Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
      
      <p>Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate. Qui international first-class nulla ut. Punctual adpisicing, essential lovely queen tempor eiusmod irure. Exclusias iskakong to Scandinavian impeccable safe quality of life soft power pariatur melbourne occaecat disarming. Est wardrobe aliquip, et foiter destination toto remarkable officia Helsinki excepteur Beasset tourist. Zurich sleepy perfect consectetur.</p>
      
      <p>Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa uase bureauc cupidatat ut minim. Sharp-circuit the best commodo nostrud delightful. Conversation auto Rochester id. Quisquam remarkable deserunt intricate airport handsome h-pop-ermapteur classic ease Asia-Pacific laboris.</p>
    </div>
  </section>
  <section className="content-section">
    <div className="grid-2">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=800&q=80" alt="Picnic spread and wine" className="card-img wide"></img>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80" alt="Fruits and basket" className="card-img wide"></img>
      </div>
    </div>
  </section>
  <section className="content-section article-text-section pt-none">
    <div className="article-text-container">
      <p>Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gaucho. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Borzol, essential lovely tempor eiusmod irure. Exclusive izakaya charming Quezon City immaculate-cute quality of life soft power pariatur occaecat disarming. Qui wardrobe aliquip, et Amadeus rock opera.</p>
      
      <p>Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureauc cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation auto willey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse list girl.</p>
    </div>
  </section>
  <section className="content-section">
    <h2>Related articles or posts</h2>
    <div className="grid-3">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80" alt="Radishes layout" className="card-img"></img>
        <h3>Title</h3>
        <p className="author-label">Author</p>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80" alt="Cherries layout" className="card-img"></img>
        <h3>Title</h3>
        <p className="author-label">Author</p>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80" alt="Mushrooms layout" className="card-img"></img>
        <h3>Title</h3>
        <p className="author-label">Author</p>
      </div>
    </div>
  </section>
  <Footer/>
  </div>
  )
}

export default Article