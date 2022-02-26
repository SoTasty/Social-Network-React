import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'

let store = {
    _state: {

 

        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 14}, 
                { id: 2,  message: "It's my first post", likesCount: 9},
                { id: 3,  message: "FuNnY jOkE", likesCount: 184}, 
            ],      
            newPostText: "it-kamasutra"
        },
        dialogsPage: {
            messages: [
                { id: 1, message: "Man study that thing"}, 
                { id: 2,  message: "I want some coffee"},
                { id: 3, message: "why so many sugar"}, 
                { id: 4, message: "It is standart amount of sugar"}, 
            ],
            dialogs: [
                { id: 1, name: 'Arthur'}, 
                { id: 2,  name: 'Valera'},
                { id: 3, name: 'miy_yuu'}, 
                { id: 4, name: 'Barista'}, 
            ],
            newMessageBody: ""
        },
        
    
    },







    getState() {
        return this._state
    },
    subscribe(observer) {
        this._state.rerenderEntireTree = observer; //observer, addEventListener
    },

    rerenderEntireTree() {
        console.log('state was changed')
    },



    
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ('');
        this._state.rerenderEntireTree();
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._state.rerenderEntireTree();
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._state.rerenderEntireTree();
    },
}



// export let sendMessage = () => {
//     let newMessage = {
//         id: 5,
//         message: _state.dialogsPage.newMessageText
//     }

//     this._state.dialogsPage.messages.push(newMessage)
//     this._state.dialogsPage.newMessageText = ('')
//     this.rerenderEntireTree()
// }

// export let updateNewMessageText = (text) => {
//     this._state.dialogsPage.newMessageText = text;
//     this._state.rerenderEntireTree();
// }



export default store;
window.store=store;

