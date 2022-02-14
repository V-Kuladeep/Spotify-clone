import React from 'react'
import AudioItem from './AudioItem';

const AudioList = props => {
    console.log(props.audio)
    let { audio, HandleSelect } = props;
    return (
      <section id="musicHome">
            <h1 style={{ color: "white", fontSize:"20px"}}>List Of Audios</h1>
        <article style={{color:"white"}}>
          {audio.map(x => {
            return (
              <AudioItem key={x.id} audio={x} HandleSelect={HandleSelect} />
            );
          })}
        </article>
      </section>
    );
}

export default AudioList
