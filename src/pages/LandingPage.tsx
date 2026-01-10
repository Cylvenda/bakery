import Detail from "@/components/sections/Detail"
import Footer from "@/components/sections/Footer"
import HeroSection from "@/components/sections/Hero"

const LandingPage = () => {
     return (
          <>
               <HeroSection />
               <Detail />
               <Footer />

               {/* Scroll to top button */}
               <a
                    href="#home"
                    className="fixed bottom-6 right-6 p-3 bg-primary rounded-md shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300"
               >
                    <img
                         src="/arrow.png"
                         alt="Top"
                         height="40"
                         width="40"
                    />
               </a>
          </>
     )
}

export default LandingPage