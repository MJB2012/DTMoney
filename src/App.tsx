import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"

export function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Henlo</h1>
    </ThemeProvider>
  )
}

