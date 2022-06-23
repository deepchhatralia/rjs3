import React from 'react'

import { Typography, Stack, Button } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

const ExerciseCard = (val) => {
    const x = "exercise/" + val.val.id;

    return <>
        <Link to={x} style={{ textDecoration: "none" }}>
            <Box bgcolor="#fff" color="black">
                <img src={val.val.gifUrl} alt={val.val.name} />
                <Stack type="button" direction="row" ml="20px" sx={{ gap: "15px" }}>
                    <Button size="small" variant="outlined">{val.val.target}</Button>
                    <Button size="small" variant="outlined">{val.val.equipment}</Button>
                </Stack>
                <Typography textTransform="capitalize" m="20px" fontSize="20px" fontWeight="bold">{val.val.name}</Typography>
            </Box>
        </Link>
    </>
}

export default ExerciseCard