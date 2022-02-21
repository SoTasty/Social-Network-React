const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({ id: 5, message: body})
            return state
        default: 
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer