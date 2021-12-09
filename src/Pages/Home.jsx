import React from 'react'
import Slider from './Slidercomponent/Slider';
import SpotifyWrapped from './Slidercomponent/SpotifyWrapped';
import SpotifyFree from './Slidercomponent/SpotifyFree';
import Footer from './Slidercomponent/Footer';

const Home = () => {
    return (
      <div>
        <Slider />
        <SpotifyWrapped />
        <SpotifyFree />
        <Footer/>
      </div>
    );
}

export default Home
