import { Card, CardContent } from "@/components/ui/card"
import { Beaker, MapPin } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="w-full px-1  md:px-5">
      <div className=" mx-auto md:px-4">
        <Card className="rounded-md shadow-sm border-2 border-primary mt-10">
          <CardContent className="grid md:grid-cols-2 gap-10 p-3 md:p-8">
            {/* Text Content */}
            <div className="flex flex-col justify-center gap-5">
              <h2 className="sansita-text text-3xl md:text-4xl font-bold flex items-center gap-2">
                <Beaker className="h-7 w-7 text-primary" />
                About Our Bakery
              </h2>

              <p className="text-muted-foreground leading-relaxed ">
                We are a locally owned bakery dedicated to crafting fresh, delicious,
                and high-quality baked goods every day. From soft breads and cakes
                to sweet pastries, everything is made with care and passion.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Our mission is simple: bring happiness to our community through
                great taste, friendly service, and consistent quality you can trust.
              </p>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Proudly serving our community every day
              </div>
            </div>

            {/* Values / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-primary bg-background">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  Fresh Ingredients
                </h3>
                <p className="text-sm text-muted-foreground">
                  We use carefully selected ingredients to ensure freshness and
                  great taste in every bite.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-primary bg-background">
                <h3 className="font-semibold text-lg mb-2">
                  Baked Daily
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our products are baked fresh every morning to give you the
                  best quality possible.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-primary bg-background">
                <h3 className="font-semibold text-lg mb-2">
                  Affordable Prices
                </h3>
                <p className="text-sm text-muted-foreground">
                  Delicious bakery items at prices everyone can enjoy.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-primary bg-background">
                <h3 className="font-semibold text-lg mb-2">
                  Customer First
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your satisfaction matters most, and we always serve with a smile.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default About