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
  // POST_RESET_PASSWORD_FAILURE
} from "./authTypes";
import cookie from "js-cookie";

const initialSignupState = {
  loading: false,
  data: {},
};

const initialLoginState = {
  loading: false,
  isLogedIn: cookie.get("token") == undefined ? false : true,
  data: {},
};

// const initialForgotPasswordState = {
//     loading: false,
//     data: {}
// }

// const initialResetPasswordState = {
//     loading: false,
//     data: {}
// }

export const SignupReducer = (state = initialSignupState, action) => {
  switch (action.type) {
    case POST_SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};

export const LoginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case POST_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogedIn: cookie.get("token") == undefined ? false : true,
        data: action.payload,
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

// export const forgotPasswordReducer = (
//   state = initialForgotPasswordState,
//   action
// ) => {
//   switch (action.type) {
//     case POST_FORGOT_PASSWORD_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case POST_FORGOT_PASSWORD_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//       };
//     case POST_FORGOT_PASSWORD_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export const resetPasswordReducer = (
//   state = initialResetPasswordState,
//   action
// ) => {
//   switch (action.type) {
//     case POST_RESET_PASSWORD_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case POST_RESET_PASSWORD_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//       };
//     case POST_RESET_PASSWORD_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//       };

//     default:
//       return state;
//   }
// };
