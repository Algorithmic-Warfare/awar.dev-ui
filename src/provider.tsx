import * as React from "react"

type Theme = "dark" | "light"

interface AWARThemeContext {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = React.createContext<AWARThemeContext | null>(null)

export interface AWARProviderProps {
  /** Initial theme. Defaults to "dark". */
  defaultTheme?: Theme
  /** Controlled theme value. When provided, the provider becomes controlled. */
  theme?: Theme
  /** Callback when theme changes. */
  onThemeChange?: (theme: Theme) => void
  children: React.ReactNode
}

function AWARProvider({
  defaultTheme = "dark",
  theme: controlledTheme,
  onThemeChange,
  children,
}: AWARProviderProps) {
  const [internalTheme, setInternalTheme] = React.useState<Theme>(defaultTheme)
  const theme = controlledTheme ?? internalTheme

  const setTheme = React.useCallback(
    (next: Theme) => {
      if (!controlledTheme) setInternalTheme(next)
      onThemeChange?.(next)
    },
    [controlledTheme, onThemeChange]
  )

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  // Apply class to documentElement
  React.useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("light", theme === "light")
    root.classList.toggle("dark", theme === "dark")
  }, [theme])

  const value = React.useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

function useAWARTheme(): AWARThemeContext {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) {
    throw new Error("useAWARTheme must be used within <AWARProvider>")
  }
  return ctx
}

export { AWARProvider, useAWARTheme, ThemeContext }
export type { Theme, AWARThemeContext }
