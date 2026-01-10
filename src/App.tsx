import { ThemeProvider } from "./components/theme-provider"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <>
    <ThemeProvider defaultTheme="system" storageKey="cylvenda-theme-provider">
      <AppRoutes />
    </ThemeProvider>
    </>
  )
}

export default App