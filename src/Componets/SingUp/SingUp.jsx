import React from 'react'
import { getAuth } from "firebase/auth";
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singUpasync } from '../../Services/Action/auth.action';
import { Container, Form } from 'react-bootstrap';
import { Button } from 'bootstrap';
import "../SingUp/SingUp.css"

import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { database } from '../../Services/MyFireBase/myfirebase';

// import { database } from '../../Services/MyFireBase/myfirebase';

function SingUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate()


    const [inputValue , setinputValue] = useState(
        {
            email : '',
            password : ''
        }
    );


    const handlechange = (e) => {
        setinputValue({...inputValue,[e.target.name] : e.target.value})
    }
// console.log(inputValue);

    const handleSubmit = (e) => {

        e.preventDefault();

        // console.log("dfsdfsdfsdfsdfsd");
        dispatch(singUpasync(inputValue));
        // console.log(inputValue,"ffgf");

        
    }


    return (
        <>

            <Container className="d-flex justify-content-center">
               
                    <div class="form-box mt-5">
                        <form class="form" onSubmit={(e) => handleSubmit(e)}>
                            <span class="title">Sign up</span>
                            <span class="subtitle">Create a free account with your email.</span>
                            <div class="form-container">
                                {/* <input type="text" class="input" placeholder="Full Name"/> */}
                                <input type="email" class="input my-2" placeholder="Email" onChange={(e) => handlechange(e)}/>
                                <input type="password" class="input" placeholder="Password" onChange={(e) => handlechange(e)}/>
                            </div>
                            <button>Sign up</button>
                        </form>
                        <div class="form-section">
                            <p>Have an account? <a href="https://theahmedmuneeb.github.io" target="_blank">Log in</a> </p>
                        </div>
                    </div>
                

            </Container>
        </>
    )
}

export default SingUp