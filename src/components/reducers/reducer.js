import {
    LOGIN_USER,
    ERROR,
    LOGOUT_USER, UPDATE_DETAILS
} from "./action.types";

const initalState = {
    isLogged: false,
    email: "",
    name: "",
    phone: "",
    token: "",
    error:"",
    isLoading:false
};
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            console.log(action.payload);
            const {name, phone, token, email} = action.payload;
            localStorage.setItem("userdata",JSON.stringify(action.payload));
            return {...state, isLogged: true,name:name,phone:phone,token:token,email:email};
        case ERROR:
            return {...state,error:action.payload}
        case LOGOUT_USER:
            localStorage.clear();
            return {...state,isLogged: false,email: "",name: "",phone: "",token: "",error: ""}
        case UPDATE_DETAILS:
            const {updateName,updatePhone} = action.payload
            console.log(localStorage.getItem("userdata"))
            return {...state,name: updateName,phone: updatePhone}
        default:
            return state;
    }
};
export default reducer;
