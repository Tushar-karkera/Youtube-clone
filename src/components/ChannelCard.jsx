import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/Constants';


const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "Center",
      width: { xs: "356px", md: "320px" },
      height: "326px",
      margin: "auto",
      marginTop: marginTop
    }}
  >
    <Link to={`/channel/${channelDetail?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff"
        }}>
        <CardMedia image={channelDetail?.avatar[2]?.url ||
          demoProfilePicture}
          alt={channelDetail?.title || "error"}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid #e3e3e3"
          }}
        />
        <Typography variant='h6'>
          {channelDetail?.title}
          <CheckCircle
            sx={{
              fontSize: 14,
              color: "gray",
              ml: "5px"
            }} />
        </Typography>
        {
          channelDetail?.stats?.subscribers &&
          <Typography>
            {parseInt(channelDetail?.stats?.subscribers)
              .toLocaleString()}
            Subscribers
          </Typography>
        }
      </CardContent>
    </Link>
  </Box>
)


export default ChannelCard