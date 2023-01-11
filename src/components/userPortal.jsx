import { Routes,Route } from "react-router-dom";
import BookList from "./bookList";
import UserDashboard from "./userDashboard";
import UserNavbar from "./userNavbar";
import ReadBook from "./readBook";

const UserPortal = () => {
    return ( 
        <div className="userportal">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashboard/>}/>
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/book-list/:id" element={<ReadBook />} />
                <Route path="" element=''/>
            </Routes>
        </div>
     );
}
 
export default UserPortal;