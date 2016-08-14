import axios from 'axios';
import { browserHistory } from 'react-router';

 const ROOT_URL = 'https://almablog-auth.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=alma_wang';
// keys for actiontypes
export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  SET_ERROR: 'SET_ERROR',
  UNSET_ERROR: 'UNSET_ERROR',
};

export function reportError(error) {
  return ({
    type: ActionTypes.SET_ERROR,
    message: error,
  });
}

export function removeError() {
  return ({
    type: ActionTypes.UNSET_ERROR,
  });
}

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      dispatch({
        type: ActionTypes.FETCH_POSTS,
        newPosts: response.data,
      });
    }).catch(error => {
      console.log(error);
    });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      dispatch({
        type: ActionTypes.FETCH_POST,
        newPost: response.data,
      });
    }).catch(error => {
      console.log(error);
    });
  };
}

export function createPost(newPost) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts`, newPost, { headers: { authorization: localStorage.getItem('token') } })
    .then(response => {
      browserHistory.push('/');
    }).catch(error => {
      dispatch(reportError(`Creating Post Failed: ${error.response.data}`));
    });
  };
}

export function updatePost(id, post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } })
    .then(response => {
    }).catch(error => {
      console.log(error);
    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } })
    .then(response => {
      browserHistory.push('/');
    }).catch(error => {
      console.log(error);
    });
  };
}

export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}

/*// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}*/

export function signinUser(loginInfo) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, loginInfo)
    .then(response => {
      dispatch({
        type: ActionTypes.AUTH_USER,
      });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(err => {
      console.log(err);
      dispatch(reportError(`Sign In Failed: ${err.response.data}`));
    });
  };
}

export function signupUser(loginInfo) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, loginInfo)
    .then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(err => {
      dispatch(reportError(`Sign Up Failed: ${err.response.data}`));
    });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    browserHistory.push('/');
  };
}
