import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

function Header() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    document.documentElement.classList.toggle(
      "light",
      theme === "light"
    )
  }, [theme])

  return (
    <header className="flex items-center justify-end p-6 fixed top-0 w-full z-20">
      <button
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
        className="
          flex items-center justify-center
          w-11 h-11
          rounded-full
          border border---border)
          bg---card)
          text---text-primary)
          transition-all duration-300
          hover:scale-105
          hover:border---accent)
        "
      >
        {theme === "dark" ? (
          <Sun size={20} />
        ) : (
          <Moon size={20} />
        )}
      </button>
    </header>
  )
}

export default Header