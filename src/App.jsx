import Navbar from './components/Navbar'
import ParticlesBg from 'particles-bg'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'

const App = () => {

  // const location = useLocation()

  return (
    <Router>
      <ParticlesBg color='#f4f4f4' num={200} type="cobweb" bg={true} />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
      
      {/* <Footer/> */}
    </Router>
  )
}

export default App