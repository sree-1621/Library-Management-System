import { Link } from "react-router-dom";
import '../styles/adminNavbar.css'

const AdminNavbar = () => {
    return (
        <div className="adminNavbar">
            <div className="navbar">
                <div className="logo">
                    <h1>Admin Portal</h1>
                </div>
                <div className="links">
                    <ul>
                        <li><Link to='/admin/'>Dashboard</Link></li>
                        <li><Link to='/admin/add-book'>Add Book</Link></li>
                        <li><Link to='/admin/add-user'>Add User</Link></li>
                        <li><Link to='/admin/book-list'>Book List</Link></li>
                        <li><Link to='/admin/user-list'>User List</Link></li>
                        <li><Link to='/'>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdminNavbar;