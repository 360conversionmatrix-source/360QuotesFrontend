import LandingPage from './Pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import MedicareForm from './Pages/Medicare'
import PestControlForm from './Pages/PestControlForm'
import Home_insurance from './Pages/Home_insurance'
import Car from './Pages/Car'
import Navbar from './Components/common/Navbar';
import WindowsDoors from './Pages/WindowDoors';
import Footer from './Components/common/Footer';
import HVAC from './Pages/HVAC';
import PrivacyComponent from './Pages/Privacy'
import TermsAndConditionsComponent from './Pages/Terms'
import RoofingForm from './Pages/Roofing'
import PlumbingForm from './Pages/Plumbing'
import FinalExpence from './Pages/Final_Expence'
import PestIp from './Pages/PestIp'
import Debt from './Pages/Debt'

function App() {
  return (
    <div>
       {/* --- NAVBAR --- */}
    
      

      {/* Routing--> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/MedicareForm" element={<MedicareForm/>}/>
        <Route path="/Pest_control" element={<PestControlForm/>}/>
        <Route path="/Home_insurance" element={<Home_insurance/>}/>
        <Route path="/Car" element={<Car/>}/>
        <Route path="/HVAC" element={<HVAC/>}/>
        <Route path="/windowsDoors" element={<WindowsDoors/>}/>
        <Route path="/Plumbing" element={<PlumbingForm/>}/>
        <Route path="/Roofing" element={<RoofingForm/>}/>
        <Route path="/Final" element={<FinalExpence/>}/>
        <Route path="/Debt_Settlement" element={<Debt/>}/>
        <Route path="/privacy-policy" element={<PrivacyComponent/>}/>
        <Route path="/terms-and-conditions" element={<TermsAndConditionsComponent/>}/>
        <Route path="/PestIp-vpn-pest" element={<PestIp/>}/>

      </Routes>

      {/* --- FOOTER --- */}
        <Footer/>

    </div>
  )
}

export default App