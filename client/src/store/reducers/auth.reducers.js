import { userConstants } from '../../constants';
import { UserModel } from '../../models';

let user = JSON.parse(localStorage.getItem('currentUser'));
const initialState = {
    userInfo: user? user.user : {},
    loginStatus: user? userConstants.LOGIN_SUCCESS : userConstants.LOGIN_NO_ACTION,
    registerStatus: userConstants.REGISTER_NO_ACTION,
    accountType: 'student'
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_NO_ACTION:
            return {
                ...state,
                loginStatus: userConstants.LOGIN_NO_ACTION
            }

        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                loginStatus: userConstants.LOGIN_REQUEST
            };

        case userConstants.LOGIN_SUCCESS:
            const temp = action.data.user;
            return {
                ...state,
                loginStatus: userConstants.LOGIN_SUCCESS,
                userInfo: temp
            }

        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                loginStatus: userConstants.LOGIN_FAILURE
            }

        case userConstants.REGISTER_REQUEST:
            return {
                ...state,
                registerStatus: userConstants.REGISTER_REQUEST
            }

        case userConstants.REGISTER_SUCCESS:
            return {
                ...state,
                registering: userConstants.REGISTER_SUCCESS,
                loginStatus: userConstants.LOGIN_SUCCESS
            }

        case userConstants.REGISTER_FAILURE:
            return {
                ...state,
                registering: userConstants.REGISTER_FAILURE
            }

        case userConstants.LOGOUT:
            return {
                ...state,
                loginStatus: userConstants.LOGIN_NO_ACTION,
                registerStatus: userConstants.REGISTER_NO_ACTION
            };

        case userConstants.CHANGE_ACCOUNT:
            return {
                ...state,
                accountType: action.value
            }

        default:
            return state;
    }
}

export default authReducer;