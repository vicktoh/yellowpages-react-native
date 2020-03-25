
import {SIGNUP_SUCCESS} from '../reducers/types'
export const signInSuccess = (userCred)=>{
    return {
        type: SIGNUP_SUCCESS,
        payload: userCred
    }
}