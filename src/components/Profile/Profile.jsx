import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    return ( 
    <div>    
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} newPostText={props.newPostText}  dispatch={props.dispatch} />
        </div>
    </div>);
    }

    export default Profile
    