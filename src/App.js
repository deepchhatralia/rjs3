import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Exercise from './pages/Exercise';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Box } from '@mui/system';

import './App.css';

const App = () => {
    return (<>
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="exercise/:id" element={<Exercise />} />
            </Routes>
            <Footer />
        </Box>
    </>
    )
}

export default App