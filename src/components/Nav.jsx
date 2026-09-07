import { Link } from "react-router-dom"

const Nav = ({ active }) => {
	const isActive = (name) => active === name

	return (
		<header className="navbar">
			<div className="logo">
				<img
					src="https://img.icons8.com/ios-filled/50/shopping-cart.png"
					alt="Shopping cart"
				/>
			</div>
			<nav className="nav-menu">
				<Link to="/home" className={isActive('home') ? 'nav-link nav-link-active' : 'nav-link'}>
					Home
				</Link>
				<Link to="/article" className={isActive('article') ? 'nav-link nav-link-active' : 'nav-link'}>
					Article
				</Link>
				<Link to="/shop" className={isActive('shop') ? 'nav-link nav-link-active' : 'nav-link'}>
					Shop
				</Link>
				<Link to="/product" className={isActive('product') ? 'nav-link nav-link-active' : 'nav-link'}>
					Products
				</Link>
				<Link to="/about" className={isActive('about') ? 'nav-link nav-link-active' : 'nav-link'}>
					About
				</Link>
        <Link to="" className= "primary-btn">
					Button
				</Link>
			</nav>
		</header>
	)
}

export default Nav
