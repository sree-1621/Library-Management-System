import { useState, useEffect } from "react";
import '../styles/userList.css'

const UserList = () => {

    let [user, setUser] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:5000/users')
            let data = await response.json()
            setUser(data)
        }
        fetchData()
    }, [])

    return (
        <div className="userlist">
            <h1>User List</h1>
            <h4>Total Users : {user.length}</h4>
            <div className="user_section">
                {
                    user.map(u => (
                        <div className="user_card">
                            <h2>{u.name}</h2>
                            <h4>Age : {u.age}</h4>
                            <h5>Email : {u.email}</h5>
                            <h5>Phone Number : {u.phoneNumber}</h5>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default UserList;