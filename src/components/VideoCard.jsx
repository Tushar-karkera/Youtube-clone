import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle } from '../utils/Constants';

const VideoCard = ({ video, channelName }) => {
    return (
        <Card sx={{
            width: { xs: "358px", sm: "358px", md: "320px" },
            boxShadow: "none",
            borderRadius: 0
        }}>
            <Link to={video.videoId ?
                `/video/${video.videoId}` : demoVideoUrl}>
                <CardMedia
                    image={video?.thumbnails[0]?.url || demoThumbnailUrl}
                    alt={video?.descriptionSnippet}
                    sx={{
                        width: {
                            xs: "358px",
                            sm: "358px"
                        }, height: 180
                    }}
                />
            </Link>
            <CardContent
                sx={{
                    backgroundColor: "#1e1e1e",
                    height: "106px"
                }} >
                <Link to={video.videoId ?
                    `/video/${video.videoId}` : demoVideoUrl}>
                    <Typography
                        variant='subtitle1'
                        fontWeight="bold"
                        color="#fff"
                    >
                        {video?.title.slice(0, 60) || demoVideoTitle}
                    </Typography>
                </Link>

                <Link to={video?.author?.channelId ?
                    `/channel/${video?.author?.channelId}` : demoChannelUrl}>
                    <Typography
                        variant='subtitle2'
                        fontWeight="bold"
                        color="gray"
                    >
                        {channelName || video?.author?.title || demoChannelTitle}
                        <CheckCircle
                            sx={{
                                fontSize: 12,
                                color: "gray",
                                ml: "5px"
                            }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard