import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

import BodyPart from '../assets/icons/body-part.png';
import Equipment from '../assets/icons/equipment.png';
import Target from '../assets/icons/target.png';

const ExerciseDetail = ({ exercise }) => {
    const detail = [
        { icon: BodyPart, name: exercise.bodyPart },
        { icon: Equipment, name: exercise.equipment },
        { icon: Target, name: exercise.target }
    ]
    return (
        <Stack m="40px 0" alignItems="center" justifyContent="center" sx={{ gap: "60px", flexDirection: { lg: "row" } }}>
            <img src={exercise.gifUrl} alt={exercise.name} className="detail-image" />
            <Stack>
                <Typography variant="h3" textTransform="capitalize">{exercise.name}</Typography>
                <Typography m='20px 0' variant="h6">
                    Exercise keep you strong.{' '}
                    <span style={{ textTransform: "capitalize" }}>{exercise.name}</span> is one of the best <br /> exercises to target your {exercise.target}. It will help you improve your <br /> mood and gain energy.
                </Typography>
                {detail?.map((val, index) => (
                    <Stack m="20px 0" key={index} direction="row" sx={{ gap: "20px" }}>
                        <Button sx={{ backgroundColor: "#fff", borderRadius: "50%" }}>
                            <img src={val.icon} alt={val.name} />
                        </Button>
                        <Typography textTransform="capitalize" sx={{ fontSize: { lg: "30px", xs: "20px" } }}>{val.name}</Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default ExerciseDetail