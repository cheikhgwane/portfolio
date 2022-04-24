import React, { useState, useEffect } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import constant from '../constant.json'
import Image from '../Image'
import './Banner.css'

const { bannerText } = constant

export default function Banner() {
    const [text, setText] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setText((text) => text + bannerText.substring(index, index + 1))
            setIndex(index + 1)
        }, 50)
        if (index === bannerText.length + 1) {
            clearTimeout(timer)
        }
    }, [index])

    return (
        <Grid container spacing={2}>
            <Grid item md={7} xs={12}>
                <div style={{ display: 'block' }}>
                    <Typography
                        variant="h2"
                        component="div"
                        sx={{
                            flexGrow: 1,
                        }}
                        fontFamily="Roboto Slab, serif"
                    >
                        Hi, I'm Cheikh
                    </Typography>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            color: '#606060',
                        }}
                        className="bannerText"
                    >
                        Full-stack Developer and AI Enthusiast
                    </Typography>
                    <Button variant="contained">View Resume</Button>
                </div>
            </Grid>
            <Grid item xs={3}>
                <Image
                    src="https://www.fredzone.org/wp-content/uploads/2022/01/jujutsu-satoru-gojo.png.webp"
                    width="300"
                    height="300"
                    alt="This is the logot"
                />
            </Grid>
        </Grid>
    )
}
