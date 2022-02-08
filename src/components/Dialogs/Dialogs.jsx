import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
// import { sendMessage, newMessageText, updateNewMessageTex, updateNewMessageText } from '../../redux/state';


const Dialogs = (props) => {

    // let dialogs = [
    //     { id: 1, name: 'Arthur'}, 
    //     { id: 2,  name: 'Valera'},
    //     { id: 3, name: 'miy_yuu'}, 
    //     { id: 4, name: 'Barista'}, 
    // ]
    
    // let messages = [
    //     { id: 1, message: "Man study that thing"}, 
    //     { id: 2,  message: "I want some coffee"},
    //     { id: 3, message: "why so many sugar"}, 
    //     { id: 4, message: "It is standart amount of sugar"}, 
    // ]

        // let newMessageElement = React.createRef();
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = props.messages.map (m => <Message message={m.message} id={m.id} />);

    let newMessageBody = props.store._state.dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

   

    // let onMessageChange = () => {
    //     let text = newMessageElement.current.value
    //     props.updateNewMessageText(text)
    // }
    

    // let sendMessage = () => {
    //     let text = newMessageElement.current.value;
    //     alert(text)
    // }
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}> 
                {dialogsElements}
            </div>
            
            <div className={classes.messages}>
                {messagesElements}
            </div>

            <div>
                <textarea 
                placeholder='Enter your message' 
                value={newMessageBody} 
                onChange={onNewMessageChange}

                // onChange={onMessageChange}
                // value={props.newMessageText}
                // ref={newMessageElement} 
                
                ></textarea>
                <button onClick={ onSendMessageClick }>Send</button>
            </div>
        </div>

    )
}

export default Dialogs;