const CHANGE_MESSAGE = "CHANGE-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE";
let initialState = {
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
}
const DialogReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_MESSAGE:
            state.messageText = action.newMessage;
            // this._rerenderEntire(this._state);
            return state;
        case ADD_MESSAGE:
            state.messagedata.push({id: 3, mestext: state.messageText});
            state.messageText = "";
            // this._rerenderEntire(this._state);
            return state;
        default:
            return state;
    }
   
}
export const actionMessageUpdater = (newMessage) => {
    return{
      type: 'CHANGE-MESSAGE', 
      newMessage: newMessage
    }
}
export const actionAddMessage = () => {
    return {
        type: 'ADD-MESSAGE'
    }
}
export default DialogReducer;
