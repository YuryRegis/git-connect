import {LOGIN, LOGOUT} from '../actions/types'


const initialState = {
    isAuthenticated: false,
    id: null,
    name: null,
    login: null,
    avatarUrl: null,
    company: null,
    blog: null,
    location: null,
    bio: null,
    repos: {
        totalCount: null,
        nodes: [],
    },
    followers: {
        totalCount: null,
        nodes: [],
    },
    following: {
        totalCount: null,
        nodes: [],
    }
}

function Reducer(state=initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                id: action.payload.id,
                name: action.payload.name,
                login: action.payload.login,
                avatarUrl: action.payload.avatar_url,
                company: action.payload.company,
                blog: action.payload.blog,
                location: action.payload.location,
                bio: action.payload.bio,
                repos: {
                    totalCount: action.payload.public_repos,
                },
                followers: {
                    totalCount: action.payload.followers
                },
                following: {
                    totalCount: action.payload.following
                },
            }
        case LOGOUT:
            return {...initialState}
        default:
            return {...state}
    }
}

export default Reducer