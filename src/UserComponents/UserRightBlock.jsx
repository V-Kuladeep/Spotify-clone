import React from 'react'
import Profile from './ProfileComponents/Profile';
import { useParams } from 'react-router';
import ProfileUpload from './ProfileComponents/ProfileUpload';
import CreatePlayList from './../Components/Audiocomponent/CreatePlayList';
import MusicHome from './../Components/Audiocomponent/MusicHome';
import AudioDetails from '../Components/Audiocomponent/AudioDetails';

const UserRightBlock = () => {
    let { id } = useParams();
    return (
      <div className="userRightBlock">
        {id === "profile" && <Profile />}
        {id === "upload-photo" && <ProfileUpload />}
        {id === "create-play-list" && <CreatePlayList />}
        {id === "music-home" && <MusicHome />}
        <footer>
          <AudioDetails/>
        </footer>
      </div>
    );
}

export default UserRightBlock
