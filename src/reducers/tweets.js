import { RECIVE_TWEETS } from "../actions/tweets.js"

const tweets = (state = {}, action) => {
    switch (action.type) {
        case RECIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        default:
            return state
    }
}

export default tweets