import { Stack, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import Loader from './Loader'

const Exercises = ({ exercises, setExercises, selectedCategory }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisePerPage] = useState(10);

    useEffect(() => {
        const loadExercises = async () => {
            let url;
            if (selectedCategory.toLowerCase() === "all") {
                url = "https://exercisedb.p.rapidapi.com/exercises";
            } else {
                url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + selectedCategory;
            }
            const resp = await fetchData(url, exerciseOptions);
            setExercises(resp);
        }
        loadExercises();
    }, [selectedCategory])

    const lastIndex = currentPage * exercisePerPage;
    const firstIndex = lastIndex - exercisePerPage;

    const exerciseOnThisPage = exercises.slice(firstIndex, lastIndex);

    const paginate = (e, val) => {
        setCurrentPage(val);

        window.scrollTo({ top: 1420, behavior: 'smooth' });
    };

    if (!exerciseOnThisPage.length) return <Loader />;

    return (
        <Box id="exercises">
            <Typography fontSize="32px" textAlign="center" fontWeight="700">Showing Results</Typography>

            <Stack direction="row" flexWrap="wrap" justifyContent="center" m="50px 0" sx={{ gap: "100px" }}>
                {exerciseOnThisPage && exerciseOnThisPage.map((val, index) => {
                    return <ExerciseCard key={index} val={val} />
                })}
            </Stack>

            <Stack alignItems="center" justifyContent="center" m="20px 0">
                {exercises.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisePerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises