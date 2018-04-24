import { getInitialData } from "../utils/api"
import { reciveTweets } from "./tweets"
import { reciveUsers } from "./users"
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis"

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then((users, tweets) => {
                dispatch(reciveUsers(users))
                dispatch(reciveTweets(tweets))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}