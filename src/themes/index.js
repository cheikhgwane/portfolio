import React from 'react'
import { createTheme } from '@mui/material'

export const themes = {
    light: {
        palette: {
            mode: 'light',
            primary: {
                main: '#3e91ff',
                contrastText: '#fff',
            },
            background: {
                default: '#0a1929',
            },
        },
    },
    dark: {
        palette: {
            mode: 'dark',
            primary: { main: '#0072de', contrastText: '#fff' },
            background: {
                default: '#0a1929',
            },
        },
    },
}

const ThemeContext = React.createContext({
    theme: createTheme({ ...themes.light }),
    toggleTheme: () => {},
})

export default ThemeContext
