import React, { useContext, useState } from 'react'
import "./profile.css"
import { toast } from 'react-toastify';
import firebase from 'firebase';
import { Authcontextapi } from '../../Apis/Authcontext';
import { Link } from 'react-router-dom';
const ProfileUpload = () => {
  let AUTH=useContext(Authcontextapi)

    let [state, setState] = useState({
        profile_photo: "",
        loading: false,
        barStatus: false,
        progress: 0,
    });
    let{loading,profile_photo,progress,progressBar,barStatus}=state
    let handleChange = e => {
        setState({...state,[e.target.name]:e.target.files[0]})
    }

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true })
      let { name } = profile_photo
      let uploadTask = firebase.storage().ref(`user-photo/${name}`).put(profile_photo)
      // !firebase events
      uploadTask.on(
        "state_changed",
        snapShot => {
          //progress bar
          let progressBar = (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          setState({ loading: true, barStatus: true, progress: progressBar });
        },
        error => {
          //error handling
          toast.error(error.message)
        },
        async () => {
          //completion of upload task
          let DownloadUrl = await firebase
            .storage()
            .ref("user-photo")
            .child(name)
            .getDownloadURL()
          AUTH.updateProfile({
            photoURL: DownloadUrl
          })
                  window.location.assign("./userhome/profile")
        }
      )
      toast.success("successfully photo uploaded")
    } catch (error) {
      toast.error(error.message)
    }
  };
  let ProgressTemplate = () => {
    return (
      <progress value={progress} min={0} max={100}>
        {progress}
    </progress>
  )
  }
    return (
      <section id="photo_upload_block">
        <article>
          {
            <div>
              {barStatus === true ? (
                <>
                  <span>
                    <ProgressTemplate />
                  </span>
                  <span>{Math.round(progress) + "%"}</span>
                </>
              ) : (
                ""
              )}
            </div>
          }
          <div className="block">
            <Link to="/userhome/profile">
              <i class="fas fa-window-close "></i>
            </Link>
            <h2>upload Photo</h2>
            <form onSubmit={handleSubmit}>
              <input type="file" name="profile_photo" onChange={handleChange} />
              <button>
                {loading === true ? (
                  <i className="fas fa-spinner"></i>
                ) : (
                  "upload"
                )}
              </button>
            </form>
          </div>
        </article>
      </section>
    );
}

export default ProfileUpload
