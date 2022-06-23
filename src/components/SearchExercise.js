import React, { useState, useEffect } from 'react'

import { Stack, Box, Typography, Button, TextField } from '@mui/material'
import CategoryScroll from './CategoryScroll'

import { exerciseOptions, fetchData } from '../utils/fetchData'

const SearchExercise = ({ exercises, setExercises, selectedCategory, setSelectedCategory }) => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState([]);
    // const [categoryExercise, setCategoryExercise] = useState([]);

    const handleSearch = async () => {
        const resp = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
        setExercises(resp);
        setExercises(val => {
            return val.filter(x => x.bodyPart.toLowerCase().includes(search) || x.equipment.toLowerCase().includes(search) || x.name.toLowerCase().includes(search) || x.target.toLowerCase().includes(search));
        })
        setSearch("");
    }

    const handleCategoryClick = async (val) => {
        setSelectedCategory(val);
        window.scrollTo(0, 1370)
    }

    useEffect(() => {
        const loadCategory = async () => {
            const resp = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);
            setCategory(["All", ...resp]);
        }
        loadCategory();
    }, [])

    return (
        <Stack alignItems="center" justifyContent="center" m="30px 0">
            <Typography mb="30px" fontWeight="700" textAlign="center" sx={{ fontSize: { lg: "36px", xs: "30px" } }}>
                Awesome Exercise you <br /> Should Know
            </Typography>

            <Box position="relative" textAlign="center">
                <TextField
                    sx={{ input: { border: "none", outline: "none", fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
                    placeholder="Search Exercises"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <Button onClick={handleSearch} className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: "100%", position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} >
                    Search
                </Button>
            </Box>

            <Box position="relative" width="100%" m="50px 0">
                <CategoryScroll category={category} selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick} />
                {/* <CategoryCards categories={category} /> */}
            </Box>

        </Stack>
    )
}

export default SearchExercise