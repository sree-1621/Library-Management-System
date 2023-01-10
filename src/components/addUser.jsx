import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {

    let[name,setName] = useState("")
    let[age,setAge] = useState("")
    let[email,setEmail] = useState("")
    let[phoneNumber,setPhone] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();
        
        //data to be posted
        let userData = {name,age,email,phoneNumber}
                
        //posting to the server
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        alert('User has been Added')
        navigate('/admin/user-list')
    }

    return ( 
        <div className="adduser">
            <h1>Add User</h1>
            <div className="userForm">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="age">
                        <input type="number" min='1' placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <div className="email">
                        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="phone">
                        <input type="tel" minLength='10' maxLength='10' placeholder="Enter Phone Number" value={phoneNumber} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <button>Add User</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddUser;