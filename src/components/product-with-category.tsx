import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
     CardTitle,
} from "./ui/card"
import { products } from "@/lib/products"
import { Separator } from "./ui/separator"

interface ProductWithCategoryProps {
     active: number | null
     setActive: React.Dispatch<React.SetStateAction<number | null>>
}

const ProductWithCategory = ({ active, setActive }: ProductWithCategoryProps) => {
     const activeCategory = products.find((cat) => cat.id === active)

     return (
          <Card className="border-primary">
               {/* HEADER */}
               <CardHeader>
                    <CardTitle className="sansita-text text-center text-3xl">
                         Available Products

                         {activeCategory && (
                              <span
                                   key={activeCategory.id}
                                   className="block text-base font-normal mt-1 animate-fade-in"
                              >
                                   from {activeCategory.name}
                              </span>
                         )}
                    </CardTitle>

                    <CardDescription className="text-center">
                         Select a category to explore more products
                    </CardDescription>
               </CardHeader>

               <CardContent className="p-2">
                    {/* CATEGORY SELECTOR */}
                    <div className="p-5">
                         <div className="capitalize flex flex-wrap items-center justify-center gap-4 font-bold">
                              <span
                                   className={`text-lg cursor-pointer transition ${active === null ? "text-primary underline" : ""
                                        }`}
                                   onClick={() => setActive(null)}
                              >
                                   All
                              </span>

                              {products.map((item) => (
                                   <span
                                        key={item.id}
                                        onClick={() => setActive(item.id)}
                                        className={`text-lg cursor-pointer transition ${active === item.id ? "text-primary underline" : ""
                                             }`}
                                   >
                                        {item.name}
                                   </span>
                              ))}
                         </div>

                         <Separator className="mt-4" />
                    </div>

                    {/* PRODUCTS GRID */}
                    <div className="columns-2 md:columns-4 lg:columns-5 gap-3 border-primary md:border-2 md:p-3 rounded">
                         {(activeCategory ? activeCategory.items : products.flatMap((c) => c.items)).map(
                              (item) => (
                                   <div
                                        key={item.id}
                                        className="mb-2 md:mb-3 break-inside-avoid border-2 border-primary rounded-md animate-fade-in"
                                   >
                                        <img
                                             src={item.image}
                                             alt={item.name}
                                             className="rounded-md w-full"
                                             loading="lazy"
                                        />
                                   </div>
                              )
                         )}
                    </div>
               </CardContent>
          </Card>
     )
}

export default ProductWithCategory
