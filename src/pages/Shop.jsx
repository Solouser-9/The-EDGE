import { Link } from "react-router-dom"
import Footer from '../components/Footer'
import '../styles/shop.css'

const Shop = () => {
  return (
    <div className="shop-page">
  <header className="navbar">
    <div className="logo">Site</div>
    <nav className="nav-links">
      <Link to="/article">Article</Link>
      <Link to="/home">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/about">About</Link>
      <button className="nav-btn">Button</button>
    </nav>
  </header>
  <section className="hero shop-hero">
    <div className="hero-bg-img-container">
      <img src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1400&q=80" alt="Shop Hero Background" className="shop-hero-bg"></img>
    </div>
    <div className="hero-content shop-hero-content">
      <h1>Shop title</h1>
      <p>Subheading with description of your shopping site</p>
      <button className="primary-btn">Button</button>
    </div>
  </section>
  <section className="split-section">
    <div className="split-text-col">
      <h2>Heading</h2>
      <p className="section-subtext">A subheading for this section, as long or as short as you like</p>
      <div className="button-group">
        <button className="primary-btn">Button</button>
        <button className="secondary-btn">Secondary button</button>
      </div>
    </div>
    <div className="split-img-col">
      <img src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=800&q=80" alt="Pears on table" className="large-card-img"></img>
    </div>
  </section>
  <section className="split-section reverse">
    <div className="split-img-col">
      <img src="https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=800&q=80" alt="Watermelon slices" className="large-card-img"></img>
    </div>
    <div className="split-text-col">
      <h2>Heading</h2>
      <p className="section-subtext">A subheading for this section, as long or as short as you like</p>
      <div className="button-group">
        <button className="primary-btn">Button</button>
        <button className="secondary-btn">Secondary button</button>
      </div>
    </div>
  </section>
  <section className="content-section">
    <h2>Section heading</h2>
    <div className="shop-grid">
      <div className="shop-main-item">
  <img src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=800&q=80" alt="Featured Pears" className="card-img tall"></img>
  <h3>Featured product</h3>
  <p className="product-desc">Description of featured product.</p>
  <span className="price">$10.99</span>
</div>
      <div className="shop-side-column">
        <div className="shop-sub-item">
          <img src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=600&q=80" alt="Pears top product" className="card-img sm"></img>
          <h3>Product</h3>
          <p className="product-desc">Description of top product.</p>
          <span className="price">$10.99</span>
        </div>
        <div className="shop-sub-item">
          <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80" alt="Mushrooms lower product" className="card-img sm"></img>
          <h3>Product</h3>
          <p className="product-desc">Description of lower product.</p>
          <span className="price">$10.99</span>
        </div>
      </div>
    </div>
  </section>
  <section className="content-section">
    <h2>Section heading</h2>
    <div className="grid-2 feature-grid">
      <div className="feature-item">
        <div className="feature-icon"><img src="https://img.icons8.com/ios-filled/50/checked--v1.png" alt="Icon"></img></div>
        <div className="feature-text">
          <h3>Subheading</h3>
          <p>Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-icon"><img src="https://img.icons8.com/ios-filled/50/settings.png" alt="Icon"></img></div>
        <div className="feature-text">
          <h3>Subheading</h3>
          <p>Body text for whatever you'd like to suggest. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-icon"><img src="https://img.icons8.com/ios-filled/50/lock--v1.png" alt="Icon"></img></div>
        <div className="feature-text">
          <h3>Subheading</h3>
          <p>Body text for whatever you'd like to claim. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-icon"><img src="https://img.icons8.com/ios-filled/50/calendar--v1.png" alt="Icon"></img></div>
        <div className="feature-text">
          <h3>Subheading</h3>
          <p>Body text for whatever you'd like to type. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </div>
  )
}

export default Shop