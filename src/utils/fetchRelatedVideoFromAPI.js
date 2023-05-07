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
    'X-RapidAPI-Key': '7a38457500msh25117d56b1c43b7p17c048jsnf40367db3b80',
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