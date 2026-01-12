import { Card } from "../ui/card"
import { useState } from "react"
import { Separator } from "../ui/separator"
import ProductWithCategory from "../product-with-category"
import { products } from "@/lib/products"

const Products = () => {
     const [active, setActive] = useState<number | null>(null)


     return (

          <Card id="products"  className="min-h-screen -py-3  px-3 md:px-10 rounded-none">
               <div className="flex flex-col items-center py-10 rounded-none">
                    {/* Title */}
                    <h1 className="sansita-text text-4xl pb-7">Explore More</h1>
                    <Separator className="w-40 mb-10 hidden md:block" />

                    {/* Products grid */}
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 border border-primary rounded-2xl p-5">
                         {products.map((product) => {
                              const isActive = active === product.id

                              return (
                                   <div
                                        key={product.id}
                                        onClick={() => setActive(product.id)}
                                        className={`
                                             bg-[url('/bg.png')]
                                             flex flex-col items-center gap-3 p-3 rounded-xl
                                             cursor-pointer transition-all duration-300
                                             border-2 border-primary
                                             hover:shadow-xl hover:scale-105
                                             ${isActive ? "ring-3 ring-primary scale-110 shadow-2xl" : ""}
                                        `}
                                   >
                                        <img
                                             src={product.image}
                                             alt={product.name}
                                             className="h-36 w-36 object-cover rounded-full border-2 border-accent-foreground"
                                        />

                                        <span className="text-lg font-semibold text-white">
                                             {product.name}
                                        </span>
                                   </div>
                              )
                         })}
                    </div>
               </div>
               <ProductWithCategory active={active} setActive={setActive} />
          </Card >


     )
}

export default Products
