const FOLLOWED = 'FOLLOWED'
const UNFOLLOWED = "UNFOLLOWED"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
    users: [
      //  { id: 1, followed:true, status: "coffee please!", name: "Barista1", location: {country: "Russia", city: "Moscow", photoUrl: 'https://coffeeman.kz/wp-content/uploads/2018/05/coffeeman.kz_.png'}}, 
      //  { id: 2, followed:true, status: "coffee please!", name: "Barista2", location: {country: "Kazakhstan", city: "Nur-Sultan", photoUrl: 'https://coffeeman.kz/wp-content/uploads/2018/05/coffeeman.kz_.png'}},
     //   { id: 3, followed:false, status: "coffee please!", name: "Barista3", location: {country: "Russia", city: "Moscow", photoUrl: 'https://coffeeman.kz/wp-content/uploads/2018/05/coffeeman.kz_.png'}}, 
     //    { id: 4, followed:true, status: "coffee please!", name: "Barista4", location: {country: "Kazakhstan", city: "Shymkent", photoUrl: 'https://coffeeman.kz/wp-content/uploads/2018/05/coffeeman.kz_.png'}}, 
    ],
    pageSize: 5,
    totalUsersCount: 30,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOWED:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        case UNFOLLOWED: 
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        default: 
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOWED, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOWED, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({ type:SET_CURRENT_PAGE, currentPage  })
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer