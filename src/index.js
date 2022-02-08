import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import {BrowserRouter} from 'react-router-dom';

let rerenderEntireTree = (state) => { debugger
ReactDOM.render ( 
<BrowserRouter> 
    <App 

    state={store._state}
    // posts={state.profilePage.posts}
    // dialogs={state.dialogsPage.dialogs}
    // messages={state.dialogsPage.messages}
    // newPostText={state.profilePage.newPostText}
    dispatch={store.dispatch.bind(store)}
    store={store}
    // sendMessage={store.sendMessage}
    // updateNewMessageText={store.updateNewMessageText}
    />, 
</BrowserRouter>,
    document.getElementById('root'));
}

rerenderEntireTree(store.getState);

store.subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
