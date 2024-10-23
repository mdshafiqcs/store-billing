const baseUrl = import.meta.env.VITE_BASE_URL;

const loginApi = baseUrl + "/login";
const registerApi = baseUrl + "/register";
const logoutApi = baseUrl + "/logout";


export {
  loginApi,
  registerApi,
  logoutApi,
}