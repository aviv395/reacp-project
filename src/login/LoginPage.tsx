import React, { useState } from "react";
import { JSX } from "react";
import { useUserLogin } from "./UserZustand.tsx";
import { useNavigate } from 'react-router-dom';


const LoginProces = (): JSX.Element => {
    const { userList } = useUserLogin();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLogin, setIsLogin] = useState<Boolean>();
    const navigate = useNavigate();

    const handlerLoginButton = () => {
        let checkUser = userList.find(u => u.username === username && u.password === password);

        if (username !== '' && password !== '') {
            if (checkUser !== undefined) {
                console.log('login');
                setIsLogin(true);
                navigate("/home");
            } else {
                setIsLogin(false);
                console.log('wrong');
            }
        }
    }

    const handlerSignUpButton = (): void => {
        navigate("/signUp");
    }
    
    return (
        <div className="row justify-content-center mt-5">
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title text-center">Login</h5>
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
                        onClick={handlerLoginButton}
                        className="btn btn-primary mt-3 mb-2 col align-self-center">
                            login
                    </button>
                    {isLogin === false && 
                        <p className="text-danger text-center">
                            The username or password wrong
                        </p>
                    }
                    <button 
                        type="button" 
                        onClick={handlerSignUpButton}
                        className="btn btn-link col align-self-center">
                            Sign up
                    </button>
                </div>
            </div>
        </div>
    )
}

export const Login = (): JSX.Element => {
    return (
        <div>
            <LoginProces />
        </div>
    )
}