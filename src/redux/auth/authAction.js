import {
  POST_SIGNUP_REQUEST,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_FAILURE,
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  POST_LOGOUT,
  // POST_FORGOT_PASSWORD_REQUEST,
  // POST_FORGOT_PASSWORD_SUCCESS,
  // POST_FORGOT_PASSWORD_FAILURE,
  // POST_RESET_PASSWORD_REQUEST,
  // POST_RESET_PASSWORD_SUCCESS,
  // POST_RESET_PASSWORD_FAILURE,
} from "./authTypes";
import axios from "axios";
import cookie from "js-cookie";
import { getProfile } from "../profile/profileAction";
import { baseUrl } from "../../config/baseUrl";
import { toast } from "react-toastify";

export const postSignup = (data) => {
  let userData = {
    address: {},
  };

  userData.firstName = data.name;
  userData.email = data.email;
  userData.mobile = data.mobile;
  userData.password = data.password;
  // userData.address.addressline1 = data.addressline1
  // userData.address.addressline2 = data.addressline2
  // userData.address.landmark = data.landmark
  // userData.address.city = data.city
  // userData.address.state = data.state
  // userData.address.pincode = data.pincode
  // userData.address.country = data.country

  return (dispatch) => {
    dispatch(postSignupRequest());
    axios
      .post(`${baseUrl}/signup`, userData)
      .then((result) => {
        if (result.data.token) {
          cookie.set("token", result.data.token);
        } else {
          throw {
            response: { data: { message: "Unauthorised" }, status: 401 },
          };
        }
        dispatch(
          postSignupSuccess({
            message: result.data.message,
            status: result.status,
          })
        );
        dispatch(getProfile());
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        dispatch(
          postSignupFailure({
            message: err.response.data.message,
            status: err.response.status,
          })
        );
      });
  };
};

export const postLogin = (data) => {
  return (dispatch) => {
    dispatch(postLoginRequest());
    axios
      .post(`${baseUrl}/login`, data)
      .then((result) => {
        if (result.data.token) {
          cookie.set("token", result.data.token);
        } else {
          throw {
            response: { data: { message: "Unauthorised" }, status: 401 },
          };
        }
        dispatch(
          postLoginSuccess({
            message: result.data.message,
            status: result.status,
          })
        );
        dispatch(getProfile());
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        dispatch(
          postLoginFailure({
            message: err.response.data.message,
            status: err.response.status,
          })
        );
      });
  };
};

// export const postForgotPassword = (data) => {

//     return (dispatch) => {
//         dispatch(postForgotPasswordRequest())
//         axios.post(`${process.env.NEXT_PUBLIC_API_URL}/forgot-password`, data)
//             .then((result) => {
//                 dispatch(postForgotPasswordSuccess({ message: result.data.message, status: result.status }));
//             })
//             .catch((err) => {
//                 dispatch(postForgotPasswordFailure({ message: err.response.data.message, status: err.response.status }))
//             })
//     }
// }

// export const postResetPassword = (data) => {

//     return (dispatch) => {
//         dispatch(postResetPasswordRequest())
//         axios.post(`${process.env.NEXT_PUBLIC_API_URL}/reset-password`, data)
//             .then((result) => {
//                 dispatch(postResetPasswordSuccess({ message: result.data.message, status: result.status }));
//                 router.push('/')
//             })
//             .catch((err) => {
//                 dispatch(postResetPasswordFailure({ message: err.response.data.message, status: err.response.status }))
//             })
//     }
// }

export const postSignupRequest = () => {
  return {
    type: POST_SIGNUP_REQUEST,
  };
};

export const postSignupSuccess = (data) => {
  return {
    type: POST_SIGNUP_SUCCESS,
    payload: data,
  };
};
export const postSignupFailure = (data) => {
  return {
    type: POST_SIGNUP_FAILURE,
    payload: data,
  };
};

export const postLoginRequest = () => {
  return {
    type: POST_LOGIN_REQUEST,
  };
};
export const postLoginSuccess = (data) => {
  return {
    type: POST_LOGIN_SUCCESS,
    payload: data,
  };
};
export const postLoginFailure = (data) => {
  return {
    type: POST_LOGIN_FAILURE,
    payload: data,
  };
};

// export const postForgotPasswordRequest = () => {
//     return {
//         type: POST_FORGOT_PASSWORD_REQUEST
//     }
// }
// export const postForgotPasswordSuccess = (data) => {
//     return {
//         type: POST_FORGOT_PASSWORD_SUCCESS,
//         payload: data
//     }
// }
// export const postForgotPasswordFailure = (data) => {
//     return {
//         type: POST_FORGOT_PASSWORD_FAILURE,
//         payload: data
//     }
// }

// export const postResetPasswordRequest = () => {
//     return {
//         type: POST_RESET_PASSWORD_REQUEST
//     }
// }
// export const postResetPasswordSuccess = (data) => {
//     return {
//         type: POST_RESET_PASSWORD_SUCCESS,
//         payload: data
//     }
// }
// export const postResetPasswordFailure = (data) => {
//     return {
//         type: POST_RESET_PASSWORD_FAILURE,
//         payload: data
//     }
// }
