import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import NavBar from '../../components/NavBar/NavBar'
import Banner from '../../components/Banner/Banner'

// style={{ backgroundColor: "#001e3c" }}
export default function Home() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <NavBar></NavBar>
                <Banner></Banner>
                <Box sx={{ height: 1 / 2 }}>
                    <Paper square></Paper>
                </Box>
            </Grid>
            <Grid></Grid>
            <Grid></Grid>
        </Grid>
    )
}
