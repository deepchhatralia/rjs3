import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ExerciseDetail from '../components/ExerciseDetail';
import YoutubeVideos from '../components/YoutubeVideos';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

const Exercise = () => {
    const { id } = useParams();

    const [exercise, setExercise] = useState({});
    const [ytVideos, setYtVideos] = useState([]);
    // const [similarExercise, setSimilarExercise] = useState([]);

    useEffect(() => {
        const loadExercise = async () => {
            let resp = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
            setExercise({ ...resp });

            resp = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${resp.name}`, youtubeOptions);
            setYtVideos(resp.contents);

            setYtVideos(val => {
                return val.slice(0, 3);
            })
        }
        loadExercise();
    }, [])

    return <>
        <ExerciseDetail exercise={exercise} />
        <YoutubeVideos ytVideos={ytVideos} />
    </>
}

export default Exercise