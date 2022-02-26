import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import store from '../../../redux/redux-store';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPostActionCreator: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostTextActionCreator: (text) => {
      let action = updateNewPostTextActionCreator(text)
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;