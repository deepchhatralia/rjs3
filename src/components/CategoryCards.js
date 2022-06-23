import React, { useState } from 'react'

import { Typography, Stack } from '@mui/material'

import GymCatgeoryIcon from '../assets/icons/gym.png';

const CategoryCards = ({ category, selectedCategory, handleCategoryClick }) => {
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