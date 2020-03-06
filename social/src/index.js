import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import store from './redux/store';
import store from './redux/redux-store';
// import {addPost} from './redux/state';
//Moved to render.js

//for use state
// import {addPost} from './redux/state';
// import {changePostTextArea} from './redux/state';
// import state, { subscribe } from './redux/state';
import {BrowserRouter} from 'react-router-dom';

export let rerenderEntires = () => {
    // debugger
    ReactDOM.render(<BrowserRouter> 
        {/* <App state={state} addPost={addPost} changePostTextArea={changePostTextArea}/> */}
        {/* using store without state */}
        {/* <App state={store.getState()} addPost={store.addPost.bind(store)} changePostTextArea={store.changePostTextArea.bind(store)}/> */}
        {/* using dispatch in store.js */}
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>


    </BrowserRouter>, document.getElementById('root'));
}

// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(<App dataPost={dataPost} dialogData={dialogData} messagedata={messagedata}/>, document.getElementById('root'));
// Move this logic to file render.js in folder redux
// export let rerenderEntire = () => {
    
    // ReactDOM.render(<BrowserRouter> 
    //     <App state={state} addPost={addPost}/>
    // </BrowserRouter>, document.getElementById('root'));
//}
// rerenderEntires(state);
rerenderEntires(store.getState());
debugger;
// store.subscribe(()=>{
//     rerenderEntires(store.getState());
// } );
store.subscribe(rerenderEntires);
serviceWorker.unregister();
