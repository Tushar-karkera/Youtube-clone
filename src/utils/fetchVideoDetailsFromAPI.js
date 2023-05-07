import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://youtube-v38.p.rapidapi.com/video/details/',
    params: { id: 'VyHV0BRtdxo' },
    headers: {
        'X-RapidAPI-Key': '7a38457500msh25117d56b1c43b7p17c048jsnf40367db3b80',
        'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
    }
};

export const fetchVideoDetail = async (id) => {
    var newOptions = JSON.parse(JSON.stringify(options))
    newOptions.params.id = id
    //console.log(newOptions);
    const response = await axios.request(newOptions);
    //console.log(response);
    return (response)
};