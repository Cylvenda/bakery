import LandingPage from "@/pages/LandingPage"
import NoPage from "@/pages/NoPage"
import { Routes, Route } from "react-router-dom"


const AppRoutes = () => {
     return (
          <Routes>
               <Route path="/" element={<LandingPage />} />
               <Route path="*" element={<NoPage />} />
          </Routes>
     )
}

export default AppRoutes