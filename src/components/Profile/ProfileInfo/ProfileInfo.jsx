import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return ( 
    <div>
     <div><img className={classes.cofee} src='https://media.istockphoto.com/vectors/coffee-time-lettering-logo-badge-isolated-on-white-vector-id1074246754'/>
     <div className={classes.desc}>ava + description</div>
     </div>
    </div>);
    }

    export default ProfileInfo