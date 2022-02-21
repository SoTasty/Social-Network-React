import React from 'react';
import Dialogs from './Dialogs';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'
import { connect } from 'react-redux';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
// import { sendMessage, newMessageText, updateNewMessageTex, updateNewMessageText } from '../../redux/state';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBodyCreator: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessageCreator: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;