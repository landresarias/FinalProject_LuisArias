import React, { useRef } from "react";

export default function Login() {

    const Login = {
        width: '100%',
        height: '700px',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    };

    const URL_LOGIN = 'http://localhost/ws-login/login.php';
    const refUser = useRef(null);
    const refPassword = useRef(null);

    const handleLogin = async() => {
        const data = {
            'user': refUser.current.value,
            'password': refPassword.current.value
        };
        const responseJson = await getData(URL_LOGIN, data);
        console.log('event response: ', responseJson.connected);
        if (responseJson.connected) {
            alert("You are login now - " + responseJson.user + " - " + responseJson.password)
        }
        else {
            alert("User or password not found")
        }
    };

    const getData = async (url, data2) => {
        const resp = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data2),
            headers: {
                'Content-Type': 'aplication/json'
            }
        });
        const json = await resp.json();
        return json;
    };

    return (
        <div style={Login}>
            <div className='row'>
                <div className='col-sm-4 offset-4 mt-5'>
                    <div className='card pt-5'>
                        <div className='card-header text-center' >
                            <h3>🏠 LOGIN</h3>
                        </div>
                        <div className='card-body'>
                            <div className='input-group mb-3'>
                                <div className='input-group-prepend'>
                                    <span className='input-group-text' id='basic-addon1'>
                                        👤
                                    </span>
                                </div>  
                                <input className='form-control' type='text' placeholder='User Name'
                                    aria-label='Username' aria-describedby='basic-addon1' ref={refUser} />
                            </div>
                            <div className='input-group mb-3'>
                                <div className='input-group-prepend'>
                                    <span className='input-group-text' id='basic-addon2'>
                                        🔑
                                    </span>
                                </div>
                                <input className='form-control' type='password' placeholder='Password'
                                    aria-label='Password' aria-describedby='basic-addon2' ref={refPassword} />
                            </div>
                            <button className='btn btn-info btn-lg btn-block' onClick={handleLogin} > Login </button>
                            <div className='card-footer'>
                                <span>Did you forget the password?</span>
                                <a href='http://'> Recover It</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            if()
        </div>
    );
};

