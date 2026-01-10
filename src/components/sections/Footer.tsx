import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator.tsx";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import { COMPANYNAME } from "@/lib/common-names";
import { navItems } from "@/lib/links";

type LinkType = {
     value: string;
     location: string;
};

const Footer = () => {
     const links = navItems

     const companyLinks: LinkType[] = [
          { value: "Privacy Policy", location: "#" },
          { value: "Terms & Conditions", location: "#" },
          { value: "FAQs", location: "#" },
          { value: "More Products", location: "#" },
     ];

     return (
          <footer >
               <Card className="rounded-none border-none bg-[url('/bg.png')] text-primary w-full  bg-cover bg-center">
                    <CardContent className="max-w-7xl mx-auto px-3 md:px-5 py-3 md:py-12">
                         {/* Top Section */}
                         <div className="grid gap-8 md:grid-cols-4">
                              {/* Brand */}
                              <div className="space-y-3">
                                   <h1 className="text-xl font-bold">{COMPANYNAME}</h1>
                                   <p className="text-sm ">
                                        We create freshly baked bakery products using carefully selected ingredients and skilled craftsmanship.
                                   </p>
                              </div>

                              {/* Quick Links */}
                              <div>
                                   <h2 className="mb-4 text-lg font-semibold">Quick Links</h2>
                                   <ul className="space-y-2 text-sm">
                                        {links.map((link) => (
                                             <li key={link.link}>
                                                  <a href={link.link}
                                                       className="hover:underline capitalize"
                                                  >
                                                       {link.title}
                                                  </a>
                                             </li>
                                        ))}
                                   </ul>
                              </div>

                              {/* Company */}
                              <div>
                                   <h2 className="mb-4 text-lg font-semibold">Company</h2>
                                   <ul className="space-y-2 text-sm">
                                        {companyLinks.map((company) => (
                                             <li key={company.value}>
                                                  <Link
                                                       to={company.location}
                                                       className=" hover:underline"
                                                  >
                                                       {company.value}
                                                  </Link>
                                             </li>
                                        ))}
                                   </ul>
                              </div>

                              {/*social Medias*/}
                              <div >
                                   <h2 className="mb-4 text-lg font-semibold">Social</h2>
                                   <div className="flex flex-row justify-start gap-3">
                                        <LinkedinIcon />
                                        <YoutubeIcon />
                                        <InstagramIcon />
                                        <FacebookIcon />
                                   </div>
                              </div>
                         </div>

                         <Separator className="mt-5 bg-primary-foreground" />

                         {/* Bottom Bar */}
                         <div className="pt-5  flex flex-col items-center justify-between gap-4 text-sm md:flex-row font-bold">
                              <p >
                                   © {new Date().getFullYear() + " " + COMPANYNAME}. All rights reserved.
                              </p>
                              <div className="flex gap-4 ">
                                   <Link to="#" title="Cylvenda-Lts">Developed by <span className="underline">Cylvenda-Lts</span></Link>
                              </div>
                         </div>
                    </CardContent>
               </Card>
          </footer>
     );
};

export default Footer;