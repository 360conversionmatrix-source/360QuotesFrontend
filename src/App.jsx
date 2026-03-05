import LandingPage from './Pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import Hvacform from './Pages/Hvacform'
import PestControlForm from './Pages/PestControlForm'
import Home_insurance from './Pages/Home_insurance'
import WindowsRepairForm from './Pages/WindowRepairForm'
import Navbar from './Components/common/Navbar';
import Footer from './Components/common/Footer';

function App() {
  return (
    <div>
       {/* --- NAVBAR --- */}
    


      {/* Routing--> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Hvacform" element={<Hvacform/>}/>
        <Route path="/Pest_control" element={<PestControlForm/>}/>
        <Route path="/Home_insurance" element={<Home_insurance/>}/>
        <Route path="/Windows_doors" element={<WindowsRepairForm/>}/>

      </Routes>

      {/* --- FOOTER --- */}
        <Footer/>

    </div>
  )
}

export default App