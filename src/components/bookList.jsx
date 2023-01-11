import { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
// import '../styles/bookList.css'
import '../styles/booklistAmazon.css'
// import ReadBook from "./readBook";
// import { useNavigate } from "react-router-dom";

const BookList = () => {

    let [books, setBooks] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:5000/books')
            let data = await response.json()
            setBooks(data)
        }
        fetchData()
    }, [books])

    let navigate = useNavigate()

    //to fetch the route value
    let location = useLocation()

    // let HandleDelete = (id, title) => {
    //     setBooks(books.filter(x => x.id != id))
    //     alert(`${title} will be deleted`)
    // }

    let handleDelete = (id, title) => {
        fetch(`http://localhost:5000/books/${id}`, {
            method: "DELETE"
        });
        alert(`${title} will be deleted`)
    }

    let read = (id) => {
        // let data=fetch(`http://localhost:5000/books/${id}`)
        if(location.pathname == '/admin/book-list')
        {
            navigate(`/admin/book-list/${id}`)
        }
        else{
            navigate(`/user/book-list/${id}`)
        }
    }

    return (
        <div className="booklist">
            <h1>Book List : {books.length}</h1>
            <div className="book_section">
                {
                    books.map(data => (
                        <div className="book_card">
                            <div className="book_item">
                                <div className="book_img">
                                    <img width="150px" src={data.thumbnailUrl} alt="image" />
                                </div>
                                <div className="book_data">
                                    <h2>{data.title}</h2>
                                    <h3>by {data.authors}</h3>
                                    <h5>{data.categories}</h5>
                                    <h6>Page Count : {data.pageCount}</h6>
                                    <div className="btn1">
                                        <button onClick={() => read(data.id)}>Read More</button>
                                        {location.pathname == '/admin/book-list' && <button onClick={() => handleDelete(data.id, data.title)}>Delete</button>}
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default BookList;