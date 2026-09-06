import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./pages/About"
import Article from "./pages/Article"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import ProductDetail from "./pages/ProductDetail"
import Register from "./pages/Register"
import Shop from "./pages/Shop"
import Successful from "./pages/Successful"
import Verification from "./pages/Verification"
import Welcome from "./pages/Welcome"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Welcome/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/article" element = {<Article/>}/>
        <Route path = "/home" element = {<LandingPage/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/product" element = {<ProductDetail/>}/>
        <Route path = "/signin" element = {<Register/>}/>
        <Route path = "/shop" element = {<Shop/>}/>
        <Route path = "/successful" element = {<Successful/>}/>
        <Route path = "/verification" element = {<Verification/>}/>
      </Routes>
    </Router>
  )
}

export default App