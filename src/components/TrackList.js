import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { Box, Container } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';


import useMusicPlayer from '../hooks/useMusicPlayer';
import Controller from './Controller';


function TrackList() {

    const {trackList,currentTrackName, playTrack, isPlaying} = useMusicPlayer();

    return (
    <Container sx={{width: '80', height:'100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Box
        sx={{
            width: 300,
            height:300,
            backgroundColor: 'darkcyan',
            borderRadius: 6,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>

        <List sx={{width: '90%', maxWidth: 360, color: 'ivory', display: 'flex', flexDirection: 'column' }}>
        {trackList.map((track, index) => (
            <ListItem
            key={index}
            disableGutters
            sx ={{pl:2,  '&:hover': {
                backgroundColor: 'primary.dark',
                opacity: [0.9, 0.8, 0.7],
                }}}
            secondaryAction={
                <IconButton aria-label="comment">              
                    {(isPlaying&&track.name===currentTrackName)||<PlayCircleIcon 
                        onClick={()=> playTrack(index)} />}
                    {isPlaying&&(track.name===currentTrackName)&&
                    <PauseCircleIcon 
                        onClick={()=> playTrack(index)} />}
                </IconButton>
            }
            >
            <ListItemText primary={`${index+1}. ${track.name}`} />
            </ListItem>
        ))}
        </List>
        <Controller />
    </Box>
    </Container>
  );
}

export default TrackList