import React from 'react';
import {actionMessageUpdater, actionAddMessage} from './../../../redux/dialog-reducer';
const AddMessage =(props) => {
    debugger;
    //for local state
    let NewMessage = React.createRef();
    let addmessage = () =>{
        let textnewmmessage = NewMessage.current.value;
        alert('You tried to enter message: '+ textnewmmessage);
    }
    //for store
    let changeMessage = () => {
        let newMessage = NewMessage.current.value;
        console.log(newMessage);
        // props.dispatch(actionMessageUpdater(newMessage));
        props.dispatch(actionMessageUpdater(newMessage));
    }
    let addMessage = () => {
        props.dispatch(actionAddMessage());
    }
    //
    return(
        <div>
            <div>
                <textarea ref={NewMessage} value={props.dialogData.messageText} onChange={changeMessage}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add new message</button>
            </div>
        </div>
    );
}
export default AddMessage;