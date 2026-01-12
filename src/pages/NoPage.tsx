import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom" // if using React Router

const NoPage = () => {
     const navigate = useNavigate()

     return (
          <div className="h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
               <h1 className="text-5xl sansita-text font-bold text-primary">
                    404 
               </h1>
               <h2 className="text-2xl font-semibold">
                    Oops! Page Not Found
               </h2>
               <p className="text-muted-foreground max-w-md">
                    The page you are looking for does not exist. It might have been moved or deleted.
               </p>

               <Button onClick={() => navigate("/")}>
                    Go Back Home
               </Button>
          </div>
     )
}

export default NoPage
