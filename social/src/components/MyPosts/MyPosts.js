import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';
import { actionCreater, actionUpdater } from './../../redux/profile-reducer';
// let actionCreater = () => {
//   return {
//     type: 'ADD-POST'
//   }
// }
// let actionUpdater = (text) => {
//   return {
//     type: 'CHANGE-POST-TEXT-AREA', 
//     text: text
//   }
// }
const MyPosts = (props) => {
    
    let postItem = props.dataPost.map(postcontent => 
          <Post textpost={postcontent.textpost} likecount = {postcontent.likecount} id={postcontent.id}/>
      );
    //create ref to element
    let NewPostElement = React.createRef();
    let addPost = () => {
      // let text=NewPostElement.current.value;
      // props.addPost(text);
      // props.addPost();
      debugger;
      let action = {type: 'ADD-POST'}
        // props.dispatch(action);
        props.dispatch(actionCreater());
      // alert(text);
      alert(props.newTextPost);
      // props.changePostTextArea('');
    }
    // let valuePost = "test";
    let PostOnChange = () => {
      let text=NewPostElement.current.value;
      console.log(text);
      // let action = {type:'CHANGE-POST-TEXT-AREA', text: text};
      // props.dispatch(action);
      props.dispatch(actionUpdater(text));
      

    }
    return(
        <div>
          My posts 
          <div>
            <div>
            <textarea ref={NewPostElement} value={props.newTextPost} onChange={PostOnChange}/>
            </div>
            <div>
            <button onClick={addPost}>Добавить</button>
            </div>
          </div>
          {/* <Post textpost={dataPost[0].textpost} likecount = {dataPost[0].likecount} id={dataPost[0].id}/>   
          <Post textpost={dataPost[1].textpost} likecount = {dataPost[1].likecount} id={dataPost[1].id}/> 
          <Post textpost={dataPost[2].textpost} likecount = {dataPost[2].likecount} id={dataPost[2].id}/>   */}
          {postItem}
      </div>
    );
};
export default MyPosts;