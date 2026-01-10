import { Button } from "../ui/button"
import Header from "./Header"


const HeroSection = () => {
     return (
          <>
               <div id="home" className="bg-[url(hero.png)] w-full  bg-cover bg-center">
                    <Header />
                    <div className="h-123 flex items-center text-primary-foreground">
                         <div>
                              <div className="ml-16">
                                   <span className="text-lg font-semibold text-primary">Delicious Cafe</span>
                                   <p className="sansita-text text-6xl text-primary-foreground">Sweet Treats, <br />
                                        Perfect Eats</p>
                              </div>

                              <div className="ml-24 mt-5 flex flex-row gap-5">
                                   <Button className="cursor-pointer" >Shop Now</Button>
                                   <Button variant="outline" className="cursor-pointer text-black dark:text-white">Learn Now</Button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default HeroSection