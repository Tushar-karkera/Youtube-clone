import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './'
import { fetchChannel } from '../utils/fetchChannelFromApi';

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [vid, setVideos] = useState(null)

  useEffect(() => {
    console.log("id is : " + id);
    fetchChannel("details", `${id}`)
      .then((data) => {
        // console.log(data.data);
        setChannelDetail(data.data)
      })
      .catch((err) => {
        console.log(err);
      })

    fetchChannel("videos", `${id}`)
      .then((data) => {
        //console.log(data.data.contents);
        setVideos(data.data.contents)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: '300px'
          }}
        />
        <ChannelCard channelDetail={channelDetail}
          marginTop="-110px"
        />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{
          mr: { sm: "110px" }
        }} />
        {
          vid ? <Videos videos={vid} direction="row" channelName={channelDetail.title} /> : "Loading"
        }

      </Box>
    </Box>
  )
}

export default ChannelDetail