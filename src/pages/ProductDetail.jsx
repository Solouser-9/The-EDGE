import Footer from '../components/Footer'
import Nav from "../components/Nav"
import '../styles/productDetail.css'

const ProductDetail = () => {
  return (
    <div className="product-page">
  <Nav active="product" />
  <section className="content-section product-hero-section">
    <div className="product-hero-grid">
      <div className="product-img-col">
        <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80" alt="Mushroom product" className="product-main-img"></img>
      </div>
      <div className="product-info-col">
        <h1>Product name</h1>
        <p className="product-subheading">Subheading</p>
        <div className="product-price">$10.99</div>
        <p className="product-description">Body text for describing what this product is and why this product is simply a must-buy.</p>
        <button className="primary-btn full-btn">Add to cart</button>
        <p className="product-fine-print">Text box for additional details or fine print</p>
      </div>
    </div>
  </section>
  <section className="content-section">
    <h2>Related products</h2>
    <div className="grid-3">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=600&q=80" alt="Pears" className="card-img"></img>
        <h3>Product</h3>
        <p>Description of first product</p>
        <div className="card-price">$10.99</div>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80" alt="Radishes" className="card-img"></img>
        <h3>Product</h3>
        <p>Description of second product</p>
        <div className="card-price">$10.99</div>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=600&q=80" alt="Watermelon" className="card-img"></img>
        <h3>Product</h3>
        <p>Description of third product</p>
        <div className="card-price">$10.99</div>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80" alt="Mushrooms" className="card-img"></img>
        <h3>Product</h3>
        <p>Description of fourth product</p>
        <div className="card-price">$10.99</div>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=600&q=80" alt="Beets" className="card-img"></img>
        <h3>Product</h3>
        <p>Description of fifth product</p>
        <div className="card-price">$10.99</div>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80" alt="Cherries" className="card-img"></img>
        <h3>Product</h3>
        <p>Description of sixth product</p>
        <div className="card-price">$10.99</div>
      </div>
    </div>
  </section>
  <Footer/>
  </div>
  )
}

export default ProductDetail