import ProfileReducer from './profile-reducer';
import DialogReducer from './dialog-reducer';
import SidebarReducer from './sidebar-reducer';
//Create store instead state
let store = {
    _state : {
        profilePage : {
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
        },
        messagePage:{
            dialogData : [
                {
                    id:1,
                    name:"John"
                },
                {
                    id:2,
                    name:"Mary"
                },
                {
                    id:3,
                    name:"Frank"
                },
                {
                    id:4,
                    name:"Herbert"
                },
                {
                    id:5,
                    name:"Rene"
                },
                {
                    id:6,
                    name:"Herchart"
                }
            ],
            messagedata : [
                {
                    id:1,
                    mestext:"Call me!!!"
                },
                {
                    id:2,
                    mestext:"Call me, please!!!"
                }
            ],
            messageText: "Hallo, mein freund"
        },
        sidebar:{

        }
    },
    getState(){
        // debugger;
        return this._state;
    },
    _rerenderEntire() {
        console.log('State was changed');
    },
    // addPost() {
    //     // debugger;
    //     let newPost = {
    //         id:5,
            
    //         textpost:this._state.profilePage.newTextPost,
    //         likecount:25
    //     }
    
    //     this._state.profilePage.dataPost.push(newPost);
    //     this._state.profilePage.newTextPost = "";
    //     this._rerenderEntire(this._state);
    // },
    // changePostTextArea(text){
        
    //     this._state.profilePage.newTextPost = text;
    //     this._rerenderEntire(this._state);
    // },
    subscribe(observer){
        // debugger;
        this._rerenderEntire = observer; //using pattern observer
    },
    //!!!!Including dispatch
    dispatch(action){

        //after including of reducers we turn of dispatch 
        ///////////////////////////////////////////
        // if(action.type === "ADD-POST"){
        //     let newPost = {
        //         id:5,
                
        //         textpost:this._state.profilePage.newTextPost,
        //         likecount:25
        //     }
        
        //     this._state.profilePage.dataPost.push(newPost);
        //     this._state.profilePage.newTextPost = "";
        //     this._rerenderEntire(this._state);
        // }
        // else if (action.type === "CHANGE-POST-TEXT-AREA")
        // {
        //     this._state.profilePage.newTextPost = action.text;
        //     this._rerenderEntire(this._state);
        // }
        // else if (action.type === "CHANGE-MESSAGE"){
        //     this._state.messagePage.messageText = action.newMessage;
        //     this._rerenderEntire(this._state);
        // }
        // else if (action.type === "ADD-MESSAGE")
        // {
        //     this._state.messagePage.messagedata.push({id: 3, mestext: this._state.messagePage.messageText});
        //     this._state.messagePage.messageText = "";
        //     this._rerenderEntire(this._state);
        // }
        //////////////////////////////////////////////
        this._state.messagePage = DialogReducer(this._state.messagePage, action);
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.sidebar = SidebarReducer(this._state.sidebar, action);
        this._rerenderEntire(this._state);
    } 
    
}
// export const actionCreater = () => {
//     return {
//       type: 'ADD-POST'
//     }
//   }
// export const actionUpdater = (text) => {
//     return {
//       type: 'CHANGE-POST-TEXT-AREA', 
//       text: text
//     }
//   }
// export const actionMessageUpdater = (newMessage) => {
//       return{
//         type: 'CHANGE-MESSAGE', 
//         newMessage: newMessage
//       }
//   }
//   export const actionAddMessage = () => {
//       return {
//           type: 'ADD-MESSAGE'
//       }
//   }
window.store = store;




//add vvalue from changed state without params






export default store;
