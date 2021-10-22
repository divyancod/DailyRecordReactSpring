import {
    LOGIN_USER,
    ERROR,
    LOGOUT_USER, UPDATE_DETAILS,LOAD_POSTS,REFRESH_POSTS
} from "./action.types";

const initalState = {
    isLogged: false,
    email: "",
    name: "",
    phone: "",
    token: "",
    error: "",
    isLoading: false,
    posts:[],
    loadPosts:false
};
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            const {name, phone, token, email} = action.payload;
            localStorage.setItem("userdata", JSON.stringify(action.payload));
            return {...state, isLogged: true, name: name, phone: phone, token: token, email: email};
        case ERROR:
            return {...state, error: action.payload}
        case LOGOUT_USER:
            localStorage.clear();
            return {...state, isLogged: false, email: "", name: "", phone: "", token: "", error: ""}
        case UPDATE_DETAILS:
            const {updateName, updatePhone} = action.payload
            const localData = JSON.parse(localStorage.getItem("userdata"));
            const newData = {...localData, name: updateName, phone: updatePhone};
            localStorage.setItem("userdata", JSON.stringify(newData));
            return {...state, name: updateName, phone: updatePhone}
        case LOAD_POSTS:
            return {...state,posts: action.payload,loadPosts: false}
        case REFRESH_POSTS:
            return {...state,loadPosts: true}
        default:
            return state;
    }
};
export default reducer;
