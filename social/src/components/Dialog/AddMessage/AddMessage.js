import React from 'react';
const AddMessage =() => {
    let NewMessage = React.createRef();
    let addmessage = () =>{
        let textnewmmessage = NewMessage.current.value;
        alert('You tried to enter message: '+textnewmmessage);
    }
    return(
        <div>
            <div>
                <textarea ref={NewMessage}></textarea>
            </div>
            <div>
                <button onClick={addmessage}>Add new message</button>
            </div>
        </div>
    );
}
export default AddMessage;