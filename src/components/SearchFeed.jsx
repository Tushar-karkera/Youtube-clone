import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videosArray, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI("search", `${searchTerm}`)
      .then((res) => {
        setVideos(res.data.contents)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [searchTerm])

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
    >
      <Typography variant='h4'
        fontWeight="bold"
        mb={2}
        sx={{ color: 'white' }}
      >
        Search results for:
        <span style={{ color: "#F31503" }}>
          {searchTerm}
        </span> Videos
      </Typography>
      <Videos videos={videosArray} />
    </Box>
  )
}

export default SearchFeed