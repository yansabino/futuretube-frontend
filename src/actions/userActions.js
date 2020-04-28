import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";


export const baseUrl = "https://mt5jvqqlt0.execute-api.us-east-1.amazonaws.com/v1";

export const userSignup = (name, email, birthDate, password, picture) => async (dispatch) => {
  const input = {
    name, 
    email, 
    birthDate, 
    password, 
    picture
  }
  try {
    const response = await axios.post(`${baseUrl}/signup`, input);
    window.localStorage.setItem("token", response.data.token);
    dispatch(push(routes.home));
  } catch (error) {
    console.log(error)
    window.alert("Erro no SignUp");
  }
};

export const userLogin = (email, password) => async (dispatch) => {
  const login = {
    email,
    password,
  };

  try {
    const response = await axios.post(`${baseUrl}/login`, login);
    console.log(response)
    window.localStorage.setItem("token", response.data.token);
    dispatch(push(routes.home));
  } catch (error) {
    window.alert("Usuário não encontrado");
  }
};

export const changePassword = (oldPassword, newPassword) => async (dispatch) =>{
  const updatePassword = {
    oldPassword,
    newPassword
  }
  console.log(updatePassword)
  const token = window.localStorage.getItem("token")
  try {
     await axios.post(`${baseUrl}/users/changePassword`, updatePassword, {
      headers:{
        Authorization: token
      }
    })
    window.alert("Senha Alterada com sucesso")
    dispatch(push(routes.home))
  } catch (error) {
    window.alert("Não foi possivel alterar sua senha");
  }
}

export const getUserById = () => async (dispatch) =>{
  const token = window.localStorage.getItem("token")
  try {
    await axios.get(`${baseUrl}/user`, {
      headers: {
        Authorization: token
      }
    })
  } catch (error) {
    window.alert("Não foi possivel encontrar o usuario");
  }
}