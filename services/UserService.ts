export const getCurrentUserAuth = () => {
  return localStorage.getItem("email") || "admin@primedata.ai"
}

export const getTokenAuthCurrent = () => {
  return localStorage.getItem("X-Auth-Token");
}