import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
     const { theme, setTheme } = useTheme()

     const toggleTheme = () => {
          if (theme === "light") setTheme("dark")
          else if (theme === "dark") setTheme("light")
     }

     return (
          <Button
               variant="outline"
               size="icon"
               onClick={toggleTheme}
               aria-label="Toggle theme"
               className="cursor-pointer"
          >
               {theme === "light" && <Moon className="h-5 w-5" />}
               {theme === "dark" && <Sun className="h-5 w-5" />}
          </Button>
     )
}
