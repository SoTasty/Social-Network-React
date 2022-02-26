import classes from './NavBar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className={classes.nav}>
        <div><NavLink to="/profile" className={`${classes.item} ${classes.activeNavLink}`} >Profile</NavLink></div>
        <div><NavLink to="/dialogs" className={classes.item}>Messages</NavLink></div>
        <div><NavLink to="/users" className={classes.item}>Users</NavLink></div>
        <div><NavLink to="/news" className={classes.item}>News</NavLink></div>
        <div><NavLink to="/music" className={classes.item}>Music</NavLink></div>
        {/* <div><a className={'${classes.item} ${classes.hover}'}>Music</a></div>  two classes at the same time */}
        <div><NavLink to="/settings" className={classes.item}>Settings</NavLink></div>
      </nav>);
}

export default NavBar;