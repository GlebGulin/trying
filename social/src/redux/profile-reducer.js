const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT_AREA = "CHANGE-POST-TEXT-AREA";
let initialState={
      dataPost : [
          {
          id:1,
          textpost:"fhfkdf;lgfjhfkl",
          likecount:2
          },
          {
          id:2,
          textpost:"fhfkdf;lgfdhjjhjfjhfkl",
          likecount:2
          },
          {
          id:3,
          textpost:"fhfkdf;lgffkgfghfjjhfkl",
          likecount:67
          },
          {
              id:4,
              textpost:"aaaaaaaaaaaaaaaaaaaaa",
              likecount:6777777
              }
      ],
      newTextPost : "test first text"
  }

  
const ProfileReducer = (state= initialState, action) => {
  debugger;
    switch(action.type)
    {
        case ADD_POST:
            let newPost = {
                id:5,
                
                textpost:state.newTextPost,
                likecount:25
            }
    
            state.dataPost.push(newPost);
            state.newTextPost = "";
            // this._rerenderEntire(this._state);
            return state;
        case CHANGE_POST_TEXT_AREA:
            state.newTextPost = action.text;
            // this._rerenderEntire(this._state);
            return state;
        default:
            return state;
    }
    // if(action.type === "ADD-POST"){
        
    // }
    // else if (action.type === "CHANGE-POST-TEXT-AREA")
    // {
        
    // }
    // return state;
}
export const actionCreater = () => {
    return {
      type: 'ADD-POST'
    }
  }
export const actionUpdater = (text) => {
    return {
      type: 'CHANGE-POST-TEXT-AREA', 
      text: text
    }
  }
export default ProfileReducer;