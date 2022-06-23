export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dca9c7a2d6msh7f9f807d5b61a92p1c0975jsn3ee75b9d7cac',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd6713fe13cmsh9360868f32591fep1e8b4djsn438ddd66d1f6',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    let resp = await fetch(url, options);
    resp = await resp.json();
    return resp;
}