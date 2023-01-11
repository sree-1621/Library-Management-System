import { Link } from "react-router-dom";

const UserNavbar = () => {
    return (
        <div className="usernavbar">
            <div className="navbar">
                <div className="userLogo">
                    <h1>User Navbar</h1>
                </div>
                <div className="userLinks">
                    <ul>
                        <li><Link to="/user/">Home</Link></li>
                        <li><Link to="/user/book-list">Book List</Link></li>
                        <li><Link to="/">Log Out</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UserNavbar;