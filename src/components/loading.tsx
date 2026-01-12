const PageLoader = () => {
     return (
          <div className="h-screen flex items-center justify-center">
               <div className="flex flex-col items-center gap-5 text-center">

                    <div className="flex flex-col items-center gap-3 animate-pulse">
                         <h1 className="text-3xl sansita-text">
                              You’re Warmly Welcome to Wema Bakery
                         </h1>
                         <p className="text-sm text-muted-foreground">
                              We’ll get things ready in a moment...
                         </p>
                    </div>

                    <div className="h-1 w-48 bg-primary/30 rounded overflow-hidden">
                         <div className="h-full w-1/2 bg-primary animate-pulse" />
                    </div>

               </div>
          </div>
     )
}

export default PageLoader
