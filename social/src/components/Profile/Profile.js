import React from 'react';
import s from'./Profile.module.css';
import MyPosts from './../MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    
      
    return(
        <div>
            <ProfileInfo />
            <MyPosts dataPost={props.state.dataPost} addPost={props.addPost} 
            newTextPost={props.state.newTextPost}
            changePostTextArea={props.changePostTextArea}/>     
      </div>
    );
};
export default Profile;