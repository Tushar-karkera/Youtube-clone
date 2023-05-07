import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction, channelName }) => {
    // console.log(videos);
    return (
        <Stack direction={direction || "row"} flexWrap="wrap"
            justifyContent="start" gap="5px"
            alignItems="center"
        >
            {
                videos.map((item, index) => (
                    <Box key={index}>
                        {
                            item.type === 'video' &&
                            <VideoCard video={item.video} channelName={channelName} />
                        }
                        {
                            item.type === 'channel' &&
                            <ChannelCard channelDetail={item.channel} />
                        }
                    </Box>
                ))
            }
        </Stack>
    )
}

export default Videos