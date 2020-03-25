import {SIGNUP_SUCCESS} from './types'

const INITIAL_STATE = {
    email: null,
    displayName: null,
    uid: null,
    phone: null,
    profileComplete: false
}

export default authRecuder = (state = INITIAL_STATE, action )=>{

    switch(action.type){
        case SIGNUP_SUCCESS:
            let {payload} = action;
            console.log(payload);
            return {...INITIAL_STATE,...payload}
            break;

        default:
        return INITIAL_STATE
    }
}