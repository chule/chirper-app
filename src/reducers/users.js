import { RECIVE_USER } from "./actions/users.js"

export default function users(state = {}, action) {
    switch (action.type) {
        case RECIVE_USER:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}