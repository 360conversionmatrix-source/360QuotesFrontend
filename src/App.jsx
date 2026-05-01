import LandingPage from './Pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import MedicareForm from './Pages/Medicare'
import PestControlForm from './Pages/PestControlForm'
import Home_insurance from './Pages/Home_insurance'
import Car from './Pages/Car'
import Navbar from './Components/common/Navbar';
import Footer from './Components/common/Footer';
import FinalExpence from './Pages/Final_Expence';
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
        <Route path="/Final_Expence" element={<FinalExpence/>}/>

      </Routes>

      {/* --- FOOTER --- */}
        <Footer/>

    </div>
  )
}

export default App