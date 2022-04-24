import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { THEMES } from '../../themes'

export default function ThemedButton({
    label,
    size,
    variant = 'contained',
    ...props
}) {
    return (
        <Button color="light" variant={variant} {...props}>
            {label}
        </Button>
    )
}
