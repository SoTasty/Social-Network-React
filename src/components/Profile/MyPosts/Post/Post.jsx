import classes from './Post.module.css'

const Post = (props) => {
    return ( 
       <div className={classes.posts}>
         <div className={classes.item}> 
         <img src='https://coffeeman.kz/wp-content/uploads/2018/05/coffeeman.kz_.png'/>
         { props.message }
         <div><span>{ props.likes } likes</span></div>
         </div>
       </div>
     );
}

export default Post;