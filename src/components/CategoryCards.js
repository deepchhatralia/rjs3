import React, { useState } from 'react'

import { Box, Paper, Typography, Stack } from '@mui/material'
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { fetchData, exerciseOptions } from '../utils/fetchData';

import GymCatgeoryIcon from '../assets/icons/gym.png';

const CategoryCards = ({ category, selectedCategory, handleCategoryClick }) => {
    const [categoryExercise, setCategoryExercise] = useState([]);


    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{ width: "150px", height: "150px", backgroundColor: "#fff", borderRadius: "5px", cursor: "pointer", borderBottom: selectedCategory.toLowerCase() === category ? "5px solid red" : "" }}
            onClick={() => handleCategoryClick(category)}
        >
            <img src={GymCatgeoryIcon} alt={category} width="40px" height="40px" />
            <Typography fontSize="19px" fontWeight="700" m="6px 0 0 0" textTransform="capitalize">{category}</Typography>
        </Stack >
    )
}

export default CategoryCards