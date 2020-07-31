/* eslint-disable no-alert */
import firebase from 'firebase/app';
import * as CONSTANTS from 'constants/authConstants';
import { auth } from 'fire';

const requestLogin = () => ({
  type: CONSTANTS.LOGIN_REQUEST,
});

const receiveLogin = (payload) => ({
  type: CONSTANTS.LOGIN_SUCCESS,
  payload,
});

const failLogin = () => ({
  type: CONSTANTS.LOGIN_FAILURE,
});

const requestLogout = () => ({
  type: CONSTANTS.LOGOUT_REQUEST,
});

const receiveLogout = () => ({
  type: CONSTANTS.LOGOUT_SUCCESS,
});

const failLogout = () => ({
  type: CONSTANTS.LOGOUT_FAILURE,
});

export const detectAuthentication = () => (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) dispatch(receiveLogin(user));
  });
};

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(requestLogin());
  try {
    const response = await auth.signInWithEmailAndPassword(email, password);
    return response;
  } catch ({ message }) {
    dispatch(failLogin());
    alert(message);
    return message;
  }
};

const createUser = async (email, password) => {
  const response = await auth.createUserWithEmailAndPassword(email, password);
  return response;
};

export const signUp = (email, password) => async (dispatch) => {
  dispatch(requestLogin());
  try {
    const response = await createUser(email, password);
    return response;
  } catch ({ message }) {
    dispatch(failLogin());
    alert(message);
    return message;
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch(requestLogout());
  try {
    const response = await auth.signOut();
    dispatch(receiveLogout());
    return response;
  } catch ({ message }) {
    alert(message);
    dispatch(failLogout());
    return message;
  }
};

export const loginWithGoogle = () => async (dispatch) => {
  dispatch(requestLogin());
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const response = await auth.signInWithPopup(provider);
    return response;
  } catch ({ message }) {
    alert(message);
    return message;
  }
};

export const removeUser = () => (dispatch) => {
  try {
    const { currentUser } = auth;
    currentUser.delete();
    dispatch(logoutUser());
    return currentUser;
  } catch ({ message }) {
    return message;
  }
};
