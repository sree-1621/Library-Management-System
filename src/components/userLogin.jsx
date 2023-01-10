import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css'

const UserLogin = () => {

    let navigate = useNavigate()
    let handleLogin = () => {
        navigate('/user/')
    }

    return (
        <div className="userlogin">
            <div className="userMain">
                <div className="userCard">
                    <h1>Sign In....!</h1>
                    <div className="formuser">
                        <form onSubmit={handleLogin}>
                            <div className="mailuser">
                                <label>
                                    Email * <br />
                                    <input type="email" required placeholder="Enter Email" />
                                    {/* required : it is used to make that field mandatory */}
                                </label>
                            </div>
                            <div className="passuser">
                                <label>
                                    Password <br />
                                    <input type="password" placeholder="Enter Password" />
                                </label>
                            </div>
                            <button id="bt2">Login</button>
                        </form>
                    </div>
                </div>
                <div className="userImage">
                    <img src="images/userpage.png" alt="" />
                </div>
            </div>
        </div>
    )
}
export default UserLogin;