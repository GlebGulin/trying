import React from 'react';
import dg from './Dialog.module.css';
// import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './DialogMessage/DialogMessage';
import AddMessage from './AddMessage/AddMessage';
const Dialog = (props) => {
    debugger;
    //map a new array
    let dialogItems = props.state.dialogData.map( dialog => 
        <DialogItem name={dialog.name} id={dialog.id}/>

    )
    //look at index.js
   
    //map a new array for view
    let messageitem = props.state.messagedata.map(mess => 
        <MessageItem mestext={mess.mestext} id={mess.id}/>)
    
    return(
        <div className={dg.dialogs}>
            <div className={dg.nameuser}>
               
                
                {dialogItems}
               
            </div>
            <div className={dg.userMessages}>
                {messageitem}

                <AddMessage dialogData={props.state} dispatch={props.dispatch}/>
            </div>
        </div>
    );
}
export default Dialog;