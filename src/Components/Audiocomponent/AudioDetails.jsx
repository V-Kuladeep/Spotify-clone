import React from 'react'
import { useContext } from 'react';
import { AudioContextApi } from './../../Apis/AudioContext';
import "./audio.css"

const AudioDetails = () => {
    let currentSong = useContext(AudioContextApi);
    let playSong = currentSong.selectSong;
    console.log(playSong);
    return (
        <section className='audioPlayer'>
            <article>
                {currentSong == null ? (
                    "loading"
                ) : (
                        <div className='_contentBlock'>
                            <header>
                                <h5>{ playSong.title}</h5>
                                <p>
                                    <img src={playSong.poster} alt={playSong.title} />
                                </p>
                            </header>
                            <main>
                                <audio  autoPlay="true" src={playSong.src} controls/>
                            </main>
                            <footer></footer>
                        </div>
                )}
            </article>
            
        </section>
    )
}

export default AudioDetails
