import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production' ?
  '/api/' :
  '//localhost:3030/api/'

export const userService = {
  signin,
  login,
  logout
}

async function signin(user) {
  const saveUser = await axios.post(`${BASE_URL}user/signup/`, user)
  return _saveLocalUser(saveUser.data)
}

async function login(userCred) {
  const user = await axios.post(`${BASE_URL}user/login/`, userCred);
  if (user) return _saveLocalUser(user.data);
}

async function logout() {
  sessionStorage.clear();
  return await axios.post(`${BASE_URL}user/logout/`);
}


function _saveLocalUser(user) {
  sessionStorage.setItem('loggedinUser', JSON.stringify(user));
  return user;
}

