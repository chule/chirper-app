import { getInitialData } from "../utils/api"
import { reciveTweets } from "./tweets"
import { reciveUsers } from "./users"

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then((users, tweets) => {
                dispatch(reciveUsers(users))
                dispatch(reciveTweets(tweets))
            })
    }
}