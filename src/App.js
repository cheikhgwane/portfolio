import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState } from 'react'
import './App.css'
import ThemeContext, { themes } from './themes'
import Home from './views/Home'

function App() {
    const [mode, setMode] = useState('light')

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    }

    const theme = React.useMemo(() => createTheme({ ...themes[mode] }), [mode])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default App
