import axios from "axios";

const BASE_URL = 'https://youtube-v38.p.rapidapi.com'

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    q: 'New',
    hl: 'en',
    gl: 'US',
    maxResults: '20'
  },
  headers: {
    'X-RapidAPI-Key': '7a38457500msh25117d56b1c43b7p17c048jsnf40367db3b80',
    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (base, url) => {
  var newOptions = JSON.parse(JSON.stringify(options))
  newOptions.params.q = url
  newOptions.url = BASE_URL + "/" + base + "/"
  console.log(newOptions);
  const response = await axios.request(newOptions);
  //console.log(response.data.contents);
  return (response)
};