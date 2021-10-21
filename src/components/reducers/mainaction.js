import {LOGIN_USER, ERROR, LOGOUT_USER} from "./action.types";
import Axios from "axios";

export const authLogin = ({email, password}) => {
    return (dispatch) => {
        Axios.get("http://127.0.0.1:8080/login", {
            params: {
                email: email,
                password: password,
            },
        })
            .then((response) => {
                const {data} = response.data;
                dispatch({
                    type: LOGIN_USER,
                    payload: data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: ERROR,
                    payload: error?.response?.data?.message
                })
                console.log(error.response.data)
            });
    };
};
export const logoutUser = () => {
    return (dispatch) => {
        dispatch({
            type: LOGOUT_USER,
            payload: ""
        })
    }
};
export const authSignUp = ({name, email, password}) => {
    return (dispatch) => {
        Axios.get("http://127.0.0.1:8080/signup", {
            params: {
                name:name,
                email: email,
                password: password,
            },
        })
            .then((response) => {
                const {data} = response.data;
                dispatch({
                    type: LOGIN_USER,
                    payload: data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: ERROR,
                    payload: error?.response?.data?.message
                })
                console.log(error.response.data)
            });
    };
};
export const updateUserDetails=({name,phone,token})=>{
    return (dispatch)=>{
        fetch("http://localhost:8080/update-details", {
            method: "POST",
            body: JSON.stringify({ name: name, phone: phone }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization:
                    "Bearer "+token,
            },
        })
            .then((response) => response.json())
            .then((jsondata) => console.log(jsondata))
            .catch((error) => {
                console.log(error);
            });
    }
}