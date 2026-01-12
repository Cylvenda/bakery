import { COMPANYNAME } from "@/lib/common-names";
import { useState } from "react";
import { ModeToggle } from "../theme-mode-toggle";
import { navItems } from "@/lib/links";
import { MenuIcon, X } from "lucide-react";
import { Button } from "../ui/button";


const Header = () => {
     const [active, setActive] = useState("#home");
     const [mobileMenu, setMobileMenu] = useState(false)



     return (
          <header className="w-full p-0 md:p-4 select-none fixed z-50">
               <div className="h-20 md:h-fit max-w-7xl mx-auto flex items-center justify-between bg-primary py-3 px-5 md:rounded-md">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                         <img
                              src="/hero.png"
                              alt="logo"
                              className="rounded-full h-14 w-15"
                         />
                         <h1 className="sansita-text text-2xl  md:text-3xl font-bold font-heading cursor-pointer ">{COMPANYNAME}</h1>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden  md:flex items-center gap-6 uppercase">
                         {navItems.map((item) => (
                              <>
                                   <a
                                        key={item.link}
                                        href={item.link}
                                        onClick={() => setActive(item.link)}
                                        className={`capitalize cursor-pointer px-3 py-1 rounded-none md:rounded-md font-medium transition-all duration-300 ${active === item.link
                                             ? "bg-white dark:bg-black border border-primary text-primary"
                                             : "hover:font-bold"
                                             }`}
                                   >
                                        {item.title}
                                   </a>
                                   
                              </>
                         ))}
                    </nav>


                    {/* Placeholder for auth buttons / cart */}
                    <div className="flex flex-row items-center gap-3">
                         <ModeToggle />

                         <span className="md:hidden">
                              {
                                   mobileMenu ? <Button onClick={() => setMobileMenu(false)} variant="outline"><X /></Button>
                                        :
                                        <Button onClick={() => setMobileMenu(true)} variant="outline"><MenuIcon /></Button>
                              }
                         </span>
                    </div>
               </div>

               {
                    mobileMenu ? <div className="bg-primary border-t border-accent-foreground" >

                         <nav className="pt-5 flex flex-col gap-5 uppercase ">
                              {navItems.map((item) => (
                                   <a
                                        key={item.link}
                                        href={item.link}
                                        onClick={() => setActive(item.link)}
                                        className={`capitalize cursor-pointer pl-10 py-2 rounded-md font-medium transition-all duration-300 border-b border-accent-foreground`}
                                   >
                                        {item.title}
                                   </a>
                              ))}
                         </nav>

                    </div> : ""
               }
          </header>
     );
};

export default Header;
