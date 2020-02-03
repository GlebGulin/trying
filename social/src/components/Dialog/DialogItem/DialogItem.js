import React from 'react';
import {NavLink} from 'react-router-dom';
import dg from './../Dialog.module.css';
const DialogItem =(props)=> {
    let pathdialog = "/messages/"+props.id;
    return(
        <div className={dg.dialogItem}>
                    <NavLink to={pathdialog} activeClassName={dg.selected}>{props.name}</NavLink>
                </div>
    );
}
export default DialogItem;