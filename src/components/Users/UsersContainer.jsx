import React from 'react';
import Users from './Users'
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC } from '../../redux/users-reducer'


let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize, 
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage, 
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;