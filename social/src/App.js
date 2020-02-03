import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialog/Dialog';
import Music from './components/Music/Music';
import { Route,  BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    // <BrowserRouter>
    <div className="wrapper">
     <Header />
      <Nav />
      <div className="wrapper-content">
            {/* <Route path="/messages" component={Dialog} /> */}
            {/* <Route path="/messages" render={() => <Dialog dialogData={props.state.messagePage.dialogData} 
                    messagedata={props.state.messagePage.messagedata}/>} />   */}
            <Route path="/messages" render={() => <Dialog state={props.state.messagePage}/>} />

            {/* <Route path="/profile" render={() => <Profile dataPost={props.state.profilePage.dataPost}/>} /> */}
            <Route path="/profile" render={() => <Profile state={props.state.profilePage} 
            addPost={props.addPost}
            changePostTextArea={props.changePostTextArea}/>} />

            {/* <Route path="/profile" component={Profile} /> */}
            <Route path="/music" render={() => <Music />} />
            {/* <Route path="/music" component={Music} /> */}
            {/* <Profile /> */}
            {/* <Dialog /> */}
      </div>

    </div>
    // </BrowserRouter>
  );
}

export default App;
