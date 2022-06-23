import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const YoutubeVideos = ({ ytVideos }) => {
    return (
        <Box m="40px 0">
            <Typography textAlign="center" m="30px 0" variant="h5"><span style={{ borderBottom: "2px solid black" }}>Videos</span></Typography>
            <Stack gap="50px" alignItems="center" justifyContent="center" direction="row" flexWrap="wrap">
                {ytVideos.map((val, index) => (
                    <a
                        key={index}
                        className="exercise-video"
                        href={`https://www.youtube.com/watch?v=${val.video.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "black" }}
                    >
                        <img src={val.video.thumbnails[0].url} alt={val.video.title} />
                        <Typography sx={{ wordBreak: "break" }} fontSize="12px">{val.video.title}</Typography>
                    </a>
                ))
                }
            </Stack >
        </Box >
    )
}

export default YoutubeVideos