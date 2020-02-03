import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
// import {addPost} from './redux/state';
//Moved to render.js
import { rerenderEntire } from './redux/render';
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(<App dataPost={dataPost} dialogData={dialogData} messagedata={messagedata}/>, document.getElementById('root'));
// Move this logic to file render.js in folder redux
// export let rerenderEntire = () => {
    
    // ReactDOM.render(<BrowserRouter> 
    //     <App state={state} addPost={addPost}/>
    // </BrowserRouter>, document.getElementById('root'));
//}
rerenderEntire(state);

serviceWorker.unregister();
