// store.js
import { createStore, combineReducers } from "redux";

// Initial state for login
const initialLoginState = {
  error: null,
};

// Login reducer
const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, error: null };
    case "LOGIN_FAILURE":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

// Combine reducers (if you have more)
const rootReducer = combineReducers({
  Login: loginReducer,
  // Add other reducers here
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
