import React from 'react'

import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material'

import HeroBanner from '../assets/images/banner.png';

const Banner = () => {
    return (
        <Box sx={{ mt: { lg: '150px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
            <img src={HeroBanner} alt="Banner" className="hero-banner-img" />

            <Typography color="#FF2625" fontSize="26px" fontWeight="700">Fitness Club</Typography>
            <Typography sx={{ fontSize: { lg: "54px", xs: "40px" } }} fontWeight="800">Sweat, Smile<br /> And Repeat</Typography>
            <Typography mt="20px" mb="20px" fontWeight="600" width="100%">Check out the most effective exercises personalized for you</Typography>

            <Button href='#exercises' variant="contained" color="error">Explore</Button>

            <Typography mt="20px" mb="20px" color="#FF2625" fontWeight="800" sx={{ opacity: "0.1", fontSize: { lg: "150px", md: "120px", xs: "50px" } }}>Exercises</Typography>
        </Box>
    )
}

export default Banner