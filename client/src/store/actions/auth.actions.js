import { userService } from '../../services';
import { userConstants } from '../../constants';

/**
 * Change current login path
 */
export function cancelLogin() {
    return { type: userConstants.LOGIN_NO_ACTION }
}

export function login(data) {
    return (dispatch) => {
        dispatch(request());

        userService.login(data, (err, res) => {
            if (!err) {
                dispatch(success(res));
            } else {
                dispatch(failure(err));
            }
        });
    }
    
    function request() { return { type: userConstants.LOGIN_REQUEST } }
    function success(data) { return { type: userConstants.LOGIN_SUCCESS, data } }
    function failure(err) { return { type: userConstants.LOGIN_FAILURE, err } }
}

export function register(data) {

    return (dispatch) => {
        dispatch(request());

        userService.register(data, (err, res) => {
            if (!err) {
                dispatch(success(res));
            } else {
                dispatch(failure(err));
            }
        });
    }
    
    function request() { return { type: userConstants.REGISTER_REQUEST } }
    function success(data) { return { type: userConstants.REGISTER_SUCCESS, data } }
    function failure(err) { return { type: userConstants.REGISTER_FAILURE, err } }
}

export function logout() {
    localStorage.clear();

    return {
        type: userConstants.LOGOUT
    };
}

export function changeAccount(value) {
    return { type: userConstants.CHANGE_ACCOUNT, value };
}
