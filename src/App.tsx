import { useEffect, useState } from "react"
import { ThemeProvider } from "./components/theme-provider"
import AppRoutes from "./routes/AppRoutes"
import PageLoader from "./components/loading"

const App = () => {

  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 800)
    return () => clearTimeout(timer)
  }, [])

  if (!ready) return <PageLoader />


  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="cylvenda-theme-provider">
        <AppRoutes />
      </ThemeProvider>
    </>
  )
}

export default App