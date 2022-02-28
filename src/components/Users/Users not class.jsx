import classes from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/coffeeman.png'

const Users = (props) => {


let getUsers = () => {
    if(props.users.length === 0)
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items)
        
    } )}

   // props.setUsers( [
  //      { id: 1, followed:true, status: "coffee please!", name: "Barista1", location: {country: "Russia", city: "Moscow", photoUrl: 'https://coffeeman.kz/wp-content/uploads/2018/05/coffeeman.kz_.png'}}, 
   //     { id: 2, followed:true, status: "coffee please!", name: "Barista2", location: {country: "Kazakhstan", city: "Nur-Sultan", photoUrl: 'https://coffeeman.kz/wp-content/uploads/2018/05/coffeeman.kz_.png'}},
   //     { id: 3, followed:false, status: "coffee please!", name: "Barista3", location: {country: "Russia", city: "Moscow", photoUrl: 'https://coffeeman.kz/wp-content/uploads/2018/05/coffeeman.kz_.png'}}, 
   //     { id: 4, followed:true, status: "coffee please!", name: "Barista4", location: {country: "Kazakhstan", city: "Shymkent", photoUrl: 'https://coffeeman.kz/wp-content/uploads/2018/05/coffeeman.kz_.png'}},
  //  ])

    return (
        <div>
            <button onClick={getUsers}>Show users</button>
            {props.users.map(u => <div key={u.id}>
                <br></br>
                <span>
                    <div className={classes.item}><img src={u.photos.small !=null ? u.photos.small: userPhoto    } /></div>
                    <div>
                        {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                                    : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users