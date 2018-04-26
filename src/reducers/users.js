import { RECIVE_USERS } from "../actions/users.js"

const users = (state = {}, action) => {
    switch (action.type) {
        case RECIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}

export default users