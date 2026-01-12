import {
  Card,
  CardContent,
  CardTitle,
} from "../ui/card"
import ContactForm from "../contact-form"
import {
  Phone,
  Mail,
  MessageCircle,
  Send,
  MapPin,
} from "lucide-react"
import { Button } from "../ui/button"

const Contact = () => {
  return (
    <section id="contacts">
    <Card  className="border-none rounded-none w-full ">
      <CardContent className=" m-0 md:m-5 p-0 md:p-5 md:border-2 border-primary rounded-md">
        <div  className="flex flex-col md:flex-row justify-between gap-3">
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>

          {/* Contact Details */}
          <Card className="w-full md:w-1/2 rounded-none border-primary border-dashed border-2 md:rounded">



            <CardContent className="space-y-5 text-sm">
              <CardTitle>Contact Details</CardTitle>

              <div className="flex flex-col md:flex-row gap-3 justify-between p-0 md:p-2">
                <div className="flex items-center gap-2">
                  <Phone className="text-primary" size={20} />
                  <span>Phone: </span>
                  <Button variant="link" ><a href="tel:+255626186286">+255 626 186 286</a></Button>
                </div>

                <div className="flex items-center gap-1">
                  <Phone className="text-primary" size={20} />
                  <span>Phone: </span>
                  <Button variant="link" ><a href="tel:+255767176659">+255 767 176 659</a></Button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-3 p-1 md:p-3">
                {/* WhatsApp */}
                <div className="flex items-center gap-2">
                  <MessageCircle className="text-green-500" size={20} />
                  <a
                    href="https://wa.me/255712345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    WhatsApp Chat +255 626 186 286
                  </a>
                </div>

                {/* Telegram */}
                <div className="flex items-center gap-3">
                  <Send className="text-blue-500" size={20} />
                  <a
                    href="https://t.me/wemabakery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Telegram +255 626 186 286
                  </a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row  justify-between gap-3  md:p-2">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" size={20} />
                  <span>Email:</span>
                  <span>contact@wemabakery.com</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" size={20} />
                  <span>Location: Singida, Tanzania</span>
                </div>
              </div>

              {/* Google Map */}
              <div className="w-full h-64 rounded-md overflow-hidden border">
                <iframe
                  title="Wema Bakery Location - Standard Radio Mwaja, Singida"
                  src="https://www.google.com/maps?q=Standard+Radio+Mwaja+Singida+Tanzania&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Directions Link */}
              <a
                href="https://www.google.com/maps?q=Standard+Radio+Mwaja+Singida+Tanzania"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-xs hover:underline text-center"
              >
                📍 Get Directions to Wema Bakery (Near Standard Radio – Mwaja)
              </a>


            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
    </section>
  )
}

export default Contact