import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';



const MyPosts = (props) => {

  let postsElements = props.profilePage.posts.map (p => <Post message={p.message} likes={p.likesCount} /> );

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPostActionCreator();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostTextActionCreator(text)
  }

    return ( 
     <div className={classes.item + '' + classes.postsBlock}><h3>my posts</h3>
       <div>
         <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}/>
         <button onClick={addPost}>Add post</button>
         <button>Remove post</button>
       </div>
       <div className={classes.posts}>
        {postsElements}
       </div>
     </div>);
}

export default MyPosts;