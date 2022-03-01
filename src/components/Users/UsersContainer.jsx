import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, toggleIsFetchingAC } from '../../redux/users-reducer'
import * as axios from 'axios'
import Users from './Users';
import preLoader from '../../assets/images/a4f2cb80ff2ae2772e80bf30e9d78d4c.gif'
import classes from './Users.module.css'


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)    
} )
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)    
} )
    }

    render() {

        return <>
        { this.props.isFetching ? <img className={classes.preLoader} src={preLoader} /> : null }
        <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize, 
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage, 
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}

export default connect(mapStateToProps, 
    {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    toggleIsFetching: toggleIsFetchingAC
    }
    )(UsersContainer)



// let mapDispatchToProps = (dispatch) => {             старый dispatch
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//     }
// }