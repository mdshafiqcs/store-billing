import { loginApi, logoutApi, registerApi } from "../endpoints.js";

const login = async (formData) => {

  const respnose = await fetch(loginApi, {
    method: "POST",
    credentials:"include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await respnose.json();

  if(!respnose.ok) {
    throw new Error(responseBody.message);
  }
  return responseBody;
}
const register = async (formData) => {

  const respnose = await fetch(registerApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await respnose.json();

  if(!respnose.ok) {
    throw new Error(responseBody.message);
  }
  return responseBody;
}


const logout = async () => {

  const respnose = await fetch(logoutApi, {
    method: "POST",
    credentials:"include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseBody = await respnose.json();

  if(responseBody.statusCode === 401){
    throw new Error("unauthorized");
  }

  if(!respnose.ok) {
    throw new Error(responseBody.message);
  }
  return responseBody;
}

export default {
  login,
  register,
  logout,
}