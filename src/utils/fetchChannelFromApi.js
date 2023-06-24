import axios from "axios";

const BASE_URL = 'https://youtube-v38.p.rapidapi.com'

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
        id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
    }
};

export const fetchChannel = async (base, id) => {
    var newOptions = JSON.parse(JSON.stringify(options))
    newOptions.params.id = id
    newOptions.url = BASE_URL + `/channel/${base}/`
    //console.log(newOptions);
    const response = await axios.request(newOptions);
    //console.log(response);
    return (response)
};