import { useState, useEffect } from "react";
// import '../styles/bookList.css'
import '../styles/booklistAmazon.css'

const BookList = () => {

    let[books,setBooks] = useState([])

    useEffect(()=>{
        let fetchData = async() => {
            let response = await fetch('http://localhost:5000/books')
            let data = await response.json()
            setBooks(data)
        }
        fetchData()
    },[])

    let HandleDelete = ( id,title ) => {
        setBooks( books.filter( x => x.id!=id ) )
        alert(`${title} will be deleted`)
    }

    return (
        <div className="booklist">
            <h1>Book List : {books.length}</h1>
            <div className="book_section">
                {
                    books.map( data => (
                       <div className="book_card">
                        {/* <hr /> */}
                            <h2>{data.title}</h2>
                            {/* 3 ways to print the authors, use toString, join, map() */}
                            {/* <h3>Written By : {data.authors.toString()}</h3> */}
                            <h4>Written By : {data.authors.join(', ')}</h4>
                            {/* {data.authors.map(author=>(
                                <div className="authors">
                                    <h3>{author}</h3>
                                </div>
                            ))} */}
                            <h5>Category : {data.categories.join(', ')}</h5>
                            <h5>Page Count : {data.pageCount}</h5>
                            <button id="btn1" onClick={ () => HandleDelete(data.id,data.title)}>Delete</button>
                       </div> 
                    ) )
                }
            </div>
        </div>
    );
}

export default BookList;