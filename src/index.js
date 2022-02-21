import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

debugger
let rerenderEntireTree = (state) => { debugger
ReactDOM.render ( 
<BrowserRouter> 
<Provider store={store}>
    <App 
    profilePage={state.profilePage}
    dialogsPage={state.dialogsPage}
    dispatch={store.dispatch.bind(store)}
    store={store}
    />, 
</Provider>
</BrowserRouter>,
    document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe ( () => {
    let state = store.getState()
    rerenderEntireTree(state)
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
