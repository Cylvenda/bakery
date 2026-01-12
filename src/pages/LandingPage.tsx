import PageLoader from "@/components/loading"
import { lazy, Suspense } from "react"

const Header = lazy(() => import("@/components/sections/Header"))
const HeroSection = lazy(() => import("@/components/sections/Hero"))
const Products = lazy(() => import("@/components/sections/Products"))
const About = lazy(() => import("@/components/sections/About"))
const Contact = lazy(() => import("@/components/sections/Contact"))
const Footer = lazy(() => import("@/components/sections/Footer"))


const LandingPage = () => {
     return (
          <Suspense fallback={<PageLoader />}>
               <div className="animate-fade-in">
                    <Header />
                    <HeroSection />
                    <Products />
                    <About />
                    <Contact />
                    <Footer />
               </div>
               {/* Scroll to top button */}
               <a
                    href="#home"
                    className="fixed bottom-6 right-0 bg-primary rounded shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300"
               >
                    <img src="/arrow.png" alt="Top" height="90" width="60" />
               </a>

          </Suspense>

     )
}

export default LandingPage
