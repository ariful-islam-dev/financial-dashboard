import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./scenes/navbar"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import Dashboard from "@/scenes/dashboard"

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/predictions" element={<div>Predictions page</div>}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
