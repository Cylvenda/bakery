import { Button } from "../ui/button"

const HeroSection = () => {
     return (
          <section
               id="home"
               className="bg-[url(hero.png)] w-full bg-cover bg-center md:pt-28"
          >
               <div className="h-200 md:h-screen flex items-end pb-10 md:items-center text-primary-foreground">
                    <div>
                         <div className="ml-16">
                              <span className="text-lg font-semibold text-primary">
                                   Delicious Cafe
                              </span>
                              <p className="sansita-text text-4xl md:text-6xl">
                                   Sweet Treats, <br /> Perfect Eats
                              </p>
                         </div>

                         <div className="ml-24 mt-5 flex gap-5">
                              <Button  className="font-bold">Shop Now</Button>
                              <Button variant="outline" className="text-black dark:text-white font-bold">
                                   Learn More
                              </Button>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default HeroSection
