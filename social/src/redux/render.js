import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './../App';
// import * as serviceWorker from './serviceWorker';
// import state from './state';
import {addPost} from './state';
import {changePostTextArea} from './state';
import {BrowserRouter} from 'react-router-dom';

export let rerenderEntire = (state) => {
    ReactDOM.render(<BrowserRouter> 
        <App state={state} addPost={addPost} changePostTextArea={changePostTextArea}/>
    </BrowserRouter>, document.getElementById('root'));
}


