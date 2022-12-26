import { Typography } from '@mui/material';
import React from 'react'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import {Box} from '@mui/material';

import useMusicPlayer from '../hooks/useMusicPlayer'

function Controller() {

  const {currentTrackIndex, currentTrackName, playPreviousTrack,playNextTrack,playTrack, isPlaying, togglePlay} = useMusicPlayer();
  return (
    <Box>
        <SkipPreviousIcon onClick= {()=> playPreviousTrack()} />
        {isPlaying? (<PauseCircleOutlineIcon
            sx={{height: 40, width: 40}} onClick= {()=> togglePlay()}
            />):(<PlayCircleOutlineIcon 
            sx={{height: 40, width: 40}} onClick= {()=> {currentTrackIndex? playTrack(currentTrackIndex): playTrack(0)}}
            />)}
        <SkipNextIcon onClick= {()=> playNextTrack()} />
        <Typography variant='body1'>{currentTrackName}</Typography>
    </Box>
  )
}

export default Controller