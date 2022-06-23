import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
    return (
        <Box textAlign="center" bgcolor="#063970" color="#fff">
            <Typography alignItems="center" p="7px 0" fontFamily="monospace">Made with &#10084;</Typography>
        </Box>
    )
}

export default Footer