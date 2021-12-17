import {LOGIN_USER, ERROR, LOGOUT_USER, UPDATE_DETAILS, LOAD_POSTS, REFRESH_POSTS} from "./action.types";
import Axios from "axios";
import {toast} from "react-toastify";
import auth from '../../Authentication'

export const authLogin = ({email, password}) => {
    return (dispatch) => {
        Axios.get("https://think-share-backend.herokuapp.com/login", {
            params: {
                email: email,
                password: password,
            },
        })
            .then((response) => {
                const {data} = response.data;
                auth.setAuthenticated(true)
                dispatch({
                    type: LOGIN_USER,
                    payload: data,
                });
            })
            .catch((error) => {
                if (error.response == null) {
                    toast("Unable to reach servers. Try Again", {type: "error"})
                } else {
                    dispatch({
                        type: ERROR,
                        payload: error?.response?.data?.message
                    })
                }
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
        Axios.get("https://think-share-backend.herokuapp.com/signup", {
            params: {
                name: name,
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
                if (error.response == null) {
                    toast("Unable to reach servers. Try Again", {type: "error"})
                } else {
                    dispatch({
                        type: ERROR,
                        payload: error?.response?.data?.message
                    })
                }
            });
    };
};
export const updateUserDetails = ({name, phone, token}) => {
    return (dispatch) => {
        fetch("https://think-share-backend.herokuapp.com/update-details", {
            method: "POST",
            body: JSON.stringify({name: name, phone: phone}),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization:
                    "Bearer " + token,
            },
        })
            .then((response) => response.json())
            .then((jsondata) => {
                console.log(jsondata?.data?.name, jsondata?.data?.phone)
                toast("Data updated successfully", {type: "success"})
                dispatch({
                    type: UPDATE_DETAILS,
                    payload: {updateName: jsondata?.data?.name, updatePhone: jsondata?.data?.phone}
                })
            })
            .catch((error) => {
                console.log(error);
                toast("Something went wrong", {type: "error"})
            });
    }
}
export const isUserAlreadyLogin = () => {
    return (dispatch) => {
        const info = JSON.parse(localStorage.getItem("userdata"));
        if (info != null) {
            dispatch({
                type: LOGIN_USER,
                payload: info
            })
        }
    }
}
export const savePost = ({title, body, token}) => {
    return (dispatch) => {
        fetch("https://think-share-backend.herokuapp.com/save-post", {
            method: "POST",
            body: JSON.stringify({title: title, body: body}),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization:
                    "Bearer " + token,
            },
        })
            .then((response) => response.json())
            .then((jsondata) => {
                toast("Post added successfully", {type: "success"})
                dispatch({type: REFRESH_POSTS, payload: null})
            })
            .catch((error) => {
                console.log(error);
                toast("Something went wrong", {type: "error"})
            });
    }
}
export const loadPost = ({token}) => {
    return (dispatch) => {
        Axios.get("https://think-share-backend.herokuapp.com/get-all-posts", {
            headers: {
                authorization:
                    "Bearer " + token,
            }
        })
            .then(response => {
                const {data} = response;
                dispatch({
                    type: LOAD_POSTS,
                    payload: data?.data
                })
            })
            .catch(error =>{
                console.log(error)
                toast("Unable to load posts",{type:"error"})
            })
    }
}