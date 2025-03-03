import React, { useState } from "react";
import { JSX } from "react";
import { useUserLogin } from "./UserZustand.tsx";
import { useNavigate } from 'react-router-dom';

const SingUpProces = (): JSX.Element => {
    const { userList, addUser } = useUserLogin();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSignUp, setIsSignUp] = useState<String>();
    const navigate = useNavigate();

    const handlerSignUpButton = (): void => {
        let checkUser = userList.find(u => u.username === username);

        if (username !== '' && password !== '') {
            if (checkUser === undefined) {
                addUser({username, password});
                navigate("/");
            } else {
                setIsSignUp("This username exist, try another one");
            }
        }
    }

    const handlerLoginButton = (): void => {
        navigate("/");
    }
    
    return (
        <div className="row justify-content-center mt-5">
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title text-center">Sign up</h5>
                    <p>choose username:</p>
                    <div className="input-group mb-3 mx-auto" style={{width: '100%', height: '30px'}}>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Username"
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <p>choose password:</p>
                    <div className="input-group mb-3 mx-auto" style={{width: '100%', height: '30px'}}>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button 
                        type="button" 
                        onClick={handlerSignUpButton}
                        className="btn btn-primary mt-3 mb-2 col align-self-center">
                            sign up
                    </button>
                    {isSignUp !== undefined && 
                        <p className="text-danger text-center">
                            {isSignUp}
                        </p>
                    }
                    <button 
                        type="button" 
                        onClick={handlerLoginButton}
                        className="btn btn-link col align-self-center">
                            Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export const SignUp = (): JSX.Element => {
    return (
        <div>
            <SingUpProces />
        </div>
    )
}