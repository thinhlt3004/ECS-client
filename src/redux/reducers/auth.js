import { INITIAL_STATE } from "./../store/initialState";
import {
  getType,
  loginUser,
  logOut,
  expireLogOut,
  getUserByToken,
  updatePassword,
  updateUser,
} from "./../actions/AuthActions";

export default function AuthReducer(state = INITIAL_STATE.auth, action) {
  switch (action.type) {
    case getType(loginUser.loginUserRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(loginUser.loginUserSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        errorMsg: "",
      };
    case getType(loginUser.loginUserFailure):
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    case getType(logOut.logOutSuccess):
      return {
        ...state,
        data: null,
      };
    case getType(expireLogOut.expireLogOutSuccess):
      return {
        ...state,
        data: null,
      };
    case getType(getUserByToken.getUserByTokenRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getUserByToken.getUserByTokenSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        errorMsg: "",
      };
    case getType(getUserByToken.getUserByTokenFailure):
      return {
        ...state,
        isLoading: false,
        errorMsg: "",
      };
    case getType(updatePassword.updatePasswordRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(updatePassword.updatePasswordSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        errorMsg: "",
      };
    case getType(updateUser.updateUserRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(updateUser.updateUserSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        errorMsg: "",
      };
    case getType(updateUser.updateUserFailure):
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
}
