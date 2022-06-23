import React from 'react'
import { Link } from 'react-router-dom'

import { Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
    return (
        <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
            <Link to="/">
                <img src={Logo} alt="Gym" />
            </Link>
            <Stack direction="row" spacing="30px">
                <Link to="/" style={{ textDecoration: "none", color: "black", borderBottom: "2px solid black" }}>Home</Link>
            </Stack>
        </Stack>
    )
}

export default Navbar