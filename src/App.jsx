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
import Step2 from "./pages/Onboarding"
import Step3 from "./pages/Availability"
import Dashboard from "./pages/Dashboard"
import Classes from "./pages/MyClasses"
import Students from "./pages/Students"
import './styles/index.css'

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
        <Route path = "/onboarding" element = {<Step2/>}/>
        <Route path = "/availability" element = {<Step3/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>}/>
        <Route path = "/class" element = {<Classes/>}/>
        <Route path = "/student" element = {<Students/>}/>
      </Routes>
    </Router>
  )
}

export default App