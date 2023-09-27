import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import app from "../MyFireBase/myfirebase";
import { useDispatch } from "react-redux";
import { dialogActionsClasses } from "@mui/material";
// import auth from "../MyFireBase/myfirebase";
import app from "../MyFireBase/myfirebase";
// import { useDispatch } from "react-redux";

const auth = getAuth(app);


const Sinupsuc = () => {
    return{
        type : "SIGNUP_SUC"
    }
}

const SingupErr =(msg) => {
    return{
        type : "SIGNUP_ERR",
        payload : msg
    }
}

export const singUpasync = (data) => {
    console.log(data);
    return dispatch => {
        createUserWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {

    
          const user = userCredential.user;
     
          dispatch(Sinupsuc());
          // ...
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,"erro");
          dispatch(SingupErr(errorCode))
        });
    };

}

export const singInasync = (data) => {
    // console.log(data);
    console.log(data);
    return dispatch => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(res);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    };

}