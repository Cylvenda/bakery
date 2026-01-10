import { COMPANYNAME } from "@/lib/common-names";
import { useState } from "react";
import { ModeToggle } from "../theme-mode-toggle";
import { navItems } from "@/lib/links";


const Header = () => {
     const [active, setActive] = useState("#home");

     return (
          <header   className="w-full px-4 py-4 select-none sticky top-0 z-50 ">
               <div  className="max-w-7xl mx-auto flex items-center justify-between bg-primary py-3 px-5 rounded-md">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                         <img
                              src="/hero.png"
                              alt="logo"
                              height={80}
                              width={50}
                              className="rounded-md"
                         />
                         <h1 className="sansita-text  text-2xl font-bold font-heading cursor-pointer ">{COMPANYNAME}</h1>
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center gap-6 uppercase">
                         {navItems.map((item) => (
                              <a
                                   key={item.link}
                                   href={item.link}
                                   onClick={() => setActive(item.link)}
                                   className={`capitalize cursor-pointer px-3 py-1 rounded-md font-medium transition-all duration-300 ${active === item.link
                                             ? "bg-white dark:bg-black border border-primary text-primary"
                                             : "hover:font-bold"
                                        }`}
                              >
                                   {item.title}
                              </a>
                         ))}
                    </nav>


                    {/* Placeholder for auth buttons / cart */}
                    <div>
                         <ModeToggle />
                    </div>
               </div>
          </header>
     );
};

export default Header;
