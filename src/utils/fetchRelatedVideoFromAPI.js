import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://youtube-v38.p.rapidapi.com/video/related-contents/',
  params: {
    id: 'kJQP7kiw5Fk',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
  }
};

export const fetchRelatedVideos = async (id) => {
  var newOptions = JSON.parse(JSON.stringify(options))
  newOptions.params.id = id
  //console.log(newOptions);
  const response = await axios.request(newOptions);
  //console.log(response);
  return (response)
};