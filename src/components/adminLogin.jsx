import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/adminLogin.css'

const AdminLogin = () => {

    let [mail, setMail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()

    let handleLogin = (e) => {
        e.preventDefault()
        let data = { mail, password }
        // console.log(data);
        if (mail == "admin@gmail.com" && password == "chandana") {
            navigate('/admin/')
        }
        else {
            alert('Invalid Email or Password')
        }
    }

    return (
        <div className="adminlogin">
            <div className="adminmain">
                <div className="image">
                    <img src="images/loginpage.png" alt="" />
                </div>
                <div className="adminCard">
                    <h1>Login as Admin....!</h1>
                    <div className="form">
                        <form onSubmit={handleLogin}>
                            <div className="mail">
                                <label>
                                    Email * <br />
                                    <input type="email" required placeholder="Enter Email" value={mail} onChange={(e) => setMail(e.target.value)} />
                                    {/* required : it is used to make that field mandatory */}
                                </label>
                            </div>
                            <div className="pass">
                                <label>
                                    Password <br />
                                    <input type="password" placeholder="Enter Password" value={password} onChange={(p) => setPassword(p.target.value)} />
                                </label>
                            </div>
                            <button id="bt1">Login</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AdminLogin;