import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {

    return ( 
    <div>    
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} dispatch={props.dispatch} profilePage={props.profilePage}/>
        </div>
    </div>);
    }

    export default Profile
    