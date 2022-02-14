import React from 'react'
import { useContext} from 'react';
import { AudioContextApi } from './../../Apis/AudioContext';
import "./audio.css"
import { Fragment } from 'react';
import AudioList from './AudioList';

const MusicHome = () => {
    let AUDIO = useContext(AudioContextApi)
    console.log(AUDIO)
    return (
        <Fragment>
            {AUDIO.state.length >= 0 && (<AudioList audio={AUDIO.state} HandleSelect={ AUDIO.HandleSelect}/>)}
      </Fragment> 
    )
}

export default MusicHome
