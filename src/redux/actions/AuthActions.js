import {createActions} from 'redux-actions';


export const getType = (reduxAction) => {
    return reduxAction().type;
};

export const loginUser = createActions({
    loginUserRequest : (payload) => payload,
    loginUserSuccess : (payload) => payload,
    loginUserFailure : (error) => error,
})

export const getUserByToken = createActions({
    getUserByTokenRequest : (payload) => payload,
    getUserByTokenSuccess : (payload) => payload,
})

export const updatePassword = createActions({
    updatePasswordRequest : (payload) => payload,
    updatePasswordSuccess : (payload) => payload,
})

export const updateUser = createActions({
    updateUserRequest : (payload) => payload,
    updateUserSuccess : (payload) => payload,
    updateUserFailure : (error) => error,
});


export const logOut = createActions({
    logOutRequest : () => undefined,
    logOutSuccess : () => undefined,
})

export const expireLogOut = createActions({
    expireLogOutRequest : () => undefined,
    expireLogOutSuccess : () => undefined,
})