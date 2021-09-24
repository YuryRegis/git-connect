import {SET_USER_REPOS, SET_USER_FOLLOWERS, SET_USER_FOLLOWING} from '../actions/types'
import {LOGIN, LOGOUT, SET_LOADING, SET_AUTH, SET_USER_CHAT} from '../actions/types'
import initialMessagesData from '../../views/Chat/data'


const initialState = {
    isLoading: false,
    isAuthenticated: false,
    id: null,
    name: null,
    login: null,
    avatarUrl: null,
    gitHubUrl: null,
    company: null,
    blog: null,
    location: null,
    bio: null,
    messages: [...initialMessagesData],
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
        case SET_AUTH: {
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
            }
        }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        // case SET_USER_CHAT:
        //     return {
        //         ...state,
        //         messages: [...action.payload.chat]
        //     }
        case SET_USER_REPOS:
            return {
                ...state,
                repos: {
                    totalCount: action.payload.repos.nodes.length,
                    nodes: action.payload.repos.nodes
                }
            }
        case SET_USER_FOLLOWERS:
            return {
                ...state,
                followers: {
                    totalCount: action.payload.followers.nodes.length,
                    nodes: action.payload.followers.nodes
                }
            }
        case SET_USER_FOLLOWING:
            return {
                ...state,
                following: {
                    totalCount: action.payload.following.nodes.length,
                    nodes: action.payload.following.nodes
                }
            }
        case LOGIN:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                login: action.payload.login,
                avatarUrl: action.payload.avatar_url,
                gitHubUrl: action.payload.html_url,
                company: action.payload.company,
                blog: action.payload.blog,
                location: action.payload.location,
                bio: action.payload.bio,
                repos: {
                    totalCount: action.payload.public_repos,
                    nodes: []
                },
                followers: {
                    totalCount: action.payload.followers,
                    nodes: []
                },
                following: {
                    totalCount: action.payload.following,
                    nodes: []
                },
            }
        case LOGOUT:
            return {...initialState}
        default:
            return {...state}
    }
}

export default Reducer