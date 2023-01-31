import axios from 'axios';
import { FETCH_CONTACTS } from './actionType';

const baseUrl = "http://localhost:3000/";

export function registerUser(data) {
  return (dispatch, getState) => {
    return axios({
      url: `${baseUrl}register`,
      method: "POST",
      data
    })
      .then(_=>{
        return "ok";
      })
      .catch(error=>{
        console.log(error);
        return "error";
      })
  }
}

export function login(data) {
  return (dispatch, getState) => {
    return axios({
      url: `${baseUrl}login`,
      method: "POST",
      data
    })
      .then(res=>{
        localStorage.setItem("access_token", res.data.access_token);
        return "ok";
      })
      .catch(error=>{
        console.log(error);
        return "error";
      })
  }
}

export function fetchContacts(data) {
  return (dispatch, getState) => {
    return axios({
      url: `${baseUrl}contacts`,
      method: "GET",
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then(res=>{
        dispatch({
          type: FETCH_CONTACTS,
          payload: res.data
        });
      })
      .catch(error=>{
        console.log(error);
        return "error";
      })
  }
}