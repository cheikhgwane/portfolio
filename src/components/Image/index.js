import React from 'react'
import { Box } from '@mui/material'

export default function Image({ alt, src, width, height, ...props }) {
    return (
        <Box
            sx={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
            }}
        >
            <div style={{ display: 'block' }}>
                <img
                    className="image"
                    alt={alt}
                    width={width}
                    height={height}
                    src={src}
                    {...props}
                />
            </div>
        </Box>
    )
}
