import React from 'react';
import s from'./Post.module.css';
// let props = {
//     name:'Greg',
//     age: '20'
// }
const Post = (props) => {
    
    return(
          <div className={s.item}>
              <div>
              <img src="https://www.meme-arsenal.com/memes/1dbcafe4665bd28046708dffc8052953.jpg"/>
              </div>
              <div>
            Says: {props.textpost}
            </div>
            <div>
            <p>like {props.likecount}</p> 
            </div>
            </div> 
                
      
    );
};
export default Post;