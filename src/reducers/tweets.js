import { RECIVE_TWEETS, TOGGLE_TWEET } from "../actions/tweets.js"

const tweets = (state = {}, action) => {
    switch (action.type) {
        case RECIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        case TOGGLE_TWEET:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true
                        ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
                        : [...state[action.id].likes, action.authedUser]
                }
            }    
        default:
            return state
    }
}

export default tweets