import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  console.log("interceptors: ", req);

  return req;
});

export const signIn = (formData) => API.post('/users/signin', formData); 
export const signUp = (formData) => API.post('/users/signup', formData); 