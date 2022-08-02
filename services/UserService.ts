import Router from 'next/router'
import {callApi} from "services/callApi";
import {AxiosPromise} from "axios";

export const onLogin = (email: string, password: string): AxiosPromise => {
  return callApi(`/users/authenticate`, "POST", { email, password }, null)
}

export const onSignup = (name:string, email: string, password: string): AxiosPromise => {
  return callApi(`/users/register`, "POST", { name, email, password }, null)
}

export const logout = () => {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem('user');
  Router.push('/login');
}


export const getCurrentUserAuth = () => {
  return localStorage.getItem("email") || "admin@primedata.ai"
}

export const getTokenAuthCurrent = () => {
  return localStorage.getItem("X-Auth-Token");
}

export const isLoggedIn = (): boolean => {
  return !!localStorage.getItem("token");
}

export const logOutCurrentUser = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("email");
}