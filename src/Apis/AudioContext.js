import React, { useState, useEffect, createContext } from "react";
import firebase from './../firebase';
export let AudioContextApi = createContext();

let AudioContextProvider = ({ children }) => {
    let [state, setState] = useState([]);
    let [selectSong, setSelectSong] = useState("");

    let HandleSelect = audio => {
        setSelectSong(audio);
    }


    useEffect(() => {
        let fectchAudios = async () => {
            //fetch data from database
            let audioList = firebase.database().ref("audio_library");
            //firebase to fetch
            audioList.on("value", callback => {
                // console.log(callback.val());
                // console.log(callback.key)

                let SpotifyMusics = [];
                callback.forEach(audio => {
                    let {
                        DownloadMp3,
                        DownloadPoster,
                        audio_artist,
                        audio_category,
                        audio_details,
                        audio_language,
                        audio_title,
                    } = audio.val();
                    SpotifyMusics.push({
                        id: audio.key,
                        title: audio_title,
                        artist: audio_artist,
                        language: audio_language,
                        details: audio_details,
                        category: audio_category,
                        poster: DownloadPoster,
                        src:DownloadMp3,
                    })
                })
                setState(SpotifyMusics);
            });
        };
        fectchAudios();
    }, [state.AUDIOS]);

    return (
        <AudioContextApi.Provider value={{ state, HandleSelect, selectSong }}>
            {children}
        </AudioContextApi.Provider>
    )
};
export default AudioContextProvider;