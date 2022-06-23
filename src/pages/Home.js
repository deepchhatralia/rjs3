import React, { useState, useEffect } from 'react'

import { Box } from '@mui/system'

import Banner from '../components/Banner'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'

import { exerciseOptions, fetchData } from '../utils/fetchData'

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        const loadAllExercise = async () => {
            const resp = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
            setExercises(resp);
        }
        loadAllExercise();
    }, [])

    return (
        <Box>
            <Banner />
            <SearchExercise exercises={exercises} setExercises={setExercises} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Exercises exercises={exercises} setExercises={setExercises} selectedCategory={selectedCategory} />
        </Box >
    )
}

export default Home