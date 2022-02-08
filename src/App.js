import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import MyPosts from './components/Profile/MyPosts/MyPosts';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from './redux/state';


const App = (props) => {
debugger
    return (
        
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs
                            dialogs={props.state.dialogsPage.dialogs}
                            messages={props.state.dialogsPage.messages}
                            store={props.store}


                            // newMessageText={props.state.dialogsPage.newMessageText}
                            // sendMessage={props.sendMessage}
                            // updateNewMessageText={props.updateNewMessageText}
                            />}/>

                        <Route path="/profile" element={<Profile
                            posts={props.state.profilePage.posts} 
                            newPostText={props.state.profilePage.newPostText}
                            // addPost={props.addPost}                           
                            // updateNewPostText={props.updateNewPostText}
                            dispatch={props.dispatch}
                            />}/> 

                        <Route path="/news" element={<Dialogs/>}/>

                        <Route path="/music" element={<Dialogs/>}/>    
                        
                        <Route path="/settings" element={<Dialogs/>}/>
                    </Routes>
                </div>
            </div>
        )
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
