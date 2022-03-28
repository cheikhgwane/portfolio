import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Typography } from '@mui/material'
import { MenuItem } from '@mui/material'
import constant from '../constant.json'

const { menuItems } = constant

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                        }}
                    ></Typography>
                    {menuItems.map((item, index) => (
                        <MenuItem key={index}>
                            <Typography textAlign="center">
                                {item.label}
                            </Typography>
                        </MenuItem>
                    ))}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
