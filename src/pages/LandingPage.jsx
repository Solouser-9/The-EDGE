import Footer from '../components/Footer'
import Nav from "../components/Nav"
import '../styles/landingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
  <Nav active="home" />
  <section className="hero">
    <div className="hero-content">
      <h1>Landing page title</h1>
      <p>Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.</p>
      <button className="primary-btn">Button</button>
    </div>
  </section>
  <section className="content-section">
    <h2>Section heading</h2>
    <div className="grid-3">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=600&q=80" alt="Picnic spread" className="card-img"></img>
        <h3>Subheading</h3>
        <p>Body text for whatever you'd like to add more to the subheading.</p>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80" alt="Fresh fruits" className="card-img"></img>
        <h3>Subheading</h3>
        <p>Body text for whatever you'd like to expand on the main point.</p>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80" alt="Drinks and treats" className="card-img"></img>
        <h3>Subheading</h3>
        <p>Body text for whatever you'd like to share more.</p>
      </div>
    </div>
  </section>
  <section className="split-section">
    <div className="split-text-col">
      <h2>Section heading</h2>
      <div className="split-item">
        <h3>Subheading</h3>
        <p>Body text for whatever you'd like to expand on the main point.</p>
      </div>
      <div className="split-item">
        <h3>Subheading</h3>
        <p>Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes.</p>
      </div>
      <div className="split-item">
        <h3>Subheading</h3>
        <p>Body text for whatever you'd like to add more to the main point. It provides details, explanations, and context.</p>
      </div>
    </div>
    <div className="split-img-col">
      <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80" alt="Picnic overhead view" className="large-card-img"></img>
    </div>
  </section>
  <section className="content-section">
    <h2>Section heading</h2>
    <div className="grid-2">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=800&q=80" alt="Bakery and wine" className="card-img wide"></img>
        <h3>Subheading</h3>
        <p>Body text for whatever you'd like to add more to the subheading.</p>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80" alt="Croissants on blanket" className="card-img wide"></img>
        <h3>Subheading</h3>
        <p>Body text for whatever you'd like to expand on the main point.</p>
      </div>
    </div>
  </section>
  <section className="content-section">
    <h2>Section heading</h2>
    <div className="grid-3">
      <div className="testimonial-card">
        <p className="quote">"A terrific piece of praise"</p>
        <div className="author">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar" className="avatar"></img>
          <div className="author-info">
            <span className="name">Name</span>
            <span className="handle">@handle</span>
          </div>
        </div>
      </div>
      <div className="testimonial-card">
        <p className="quote">"A fantastic bit of feedback"</p>
        <div className="author">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Avatar" className="avatar"></img>
          <div className="author-info">
            <span className="name">Name</span>
            <span className="handle">@handle</span>
          </div>
        </div>
      </div>
      <div className="testimonial-card">
        <p className="quote">"A genuinely glowing review"</p>
        <div className="author">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Avatar" className="avatar"></img>
          <div className="author-info">
            <span className="name">Name</span>
            <span className="handle">@handle</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="content-section table-section">
    <div className="table-header-row">
      <h2>Section heading</h2>
      <div className="table-actions">
        <button className="primary-btn sm">Button</button>
        <button className="secondary-btn sm">Secondary button</button>
      </div>
    </div>
    <div className="table-container">
      <div className="table-row head">
        <span>Site name</span>
        <span>Yes</span>
        <span>Yes</span>
        <span>Yes</span>
      </div>
      <div className="table-row">
        <span></span>
        <span>Yes</span>
        <span>Yes</span>
        <span>Yes</span>
      </div>
      <div className="table-row">
        <span></span>
        <span>Yes</span>
        <span>Yes</span>
        <span>Yes</span>
      </div>
      <div className="table-row">
        <span></span>
        <span>Yes</span>
        <span>Yes</span>
        <span>Yes</span>
      </div>
    </div>
  </section>
  <Footer/>
  </div>
  )
}

export default LandingPage