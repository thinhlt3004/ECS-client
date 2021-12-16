import { takeLatest, call, put } from "redux-saga/effects";
import * as Api from "./../../Api/index";
import * as authActions from "./../actions/AuthActions";
import * as notificationsActions from "./../actions/NotificationActions";
function* checkLogin(action) {
  try {
    const res = yield call(Api.userLogin, action.payload);
    if (res.status === 200) {
      if (res.data.emailConfirm === false) {
        yield put(
          notificationsActions.openNotifications(
            "Your Account is not confirmed from email"
          )
        );
        yield put(authActions.loginUser.loginUserFailure(""));
      } else {
        const authToken = {
          accessToken: res.data.accessToken,
        };
        if (localStorage.getItem("authToken") !== null) {
          localStorage.removeItem("authToken");
        }
        localStorage.setItem("authToken", JSON.stringify(authToken));
        yield put(notificationsActions.openNotifications("Login Successfully"));
        yield put(authActions.loginUser.loginUserSuccess(res.data));
      }
    }
  } catch (error) {
    yield put(
      authActions.loginUser.loginUserFailure(
        "Email or Password is incorrect! Please try again."
      )
    );
  }
}

function* logOutProcess(action) {
  localStorage.removeItem("authToken");
  yield put(notificationsActions.openNotifications("Logout Successfully"));
  yield put(authActions.logOut.logOutSuccess());
}

function* expireLogOutProcess(action) {
  localStorage.removeItem("authToken");
  yield put(
    notificationsActions.openNotifications(
      "Login session has expired. Please login again."
    )
  );
  yield put(authActions.expireLogOut.expireLogOutSuccess());
}

function* getUserByTokenProcess(action) {
  try {
    const res = yield call(Api.getUserByToken);
    if (res.status === 200) {
      yield put(
        notificationsActions.openNotifications(
          `Welcome back ${res.data.fullName}`
        )
      );
      yield put(authActions.getUserByToken.getUserByTokenSuccess(res.data));
    }
  } catch (error) {
    console.log(error);
  }
}

function* updatepasswordProcess(action) {
  try {
    const res = yield call(Api.changePassword, action.payload);
    console.log(res.status);
    console.log(res.data);
    if (res.status === 200) {
      yield put(authActions.updatePassword.updatePasswordSuccess(res.data));
      yield put(
        notificationsActions.openNotifications("Update Password Success")
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* updateUserProcess(action) {
  try {
    const res = yield call(Api.updateAccountUser, action.payload);
    console.log(res.data);
    if (res.status === 200) {
      yield put(
        notificationsActions.openNotifications("Update Informations Success")
      );
      yield put(authActions.updateUser.updateUserSuccess(res.data));
    }
  } catch (error) {
    console.log(error.message);
    yield put(authActions.updateUser.updateUserFailure("Email is existed !"));
  }
}

function* mySaga() {
  yield takeLatest(authActions.loginUser.loginUserRequest, checkLogin);
  yield takeLatest(authActions.logOut.logOutRequest, logOutProcess);
  yield takeLatest(
    authActions.expireLogOut.expireLogOutRequest,
    expireLogOutProcess
  );
  yield takeLatest(
    authActions.getUserByToken.getUserByTokenRequest,
    getUserByTokenProcess
  );
  yield takeLatest(
    authActions.updatePassword.updatePasswordRequest,
    updatepasswordProcess
  );
  yield takeLatest(authActions.updateUser.updateUserRequest, updateUserProcess);
}

export default mySaga;
