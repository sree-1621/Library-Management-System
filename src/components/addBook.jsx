import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    //title , categories, authors,shortDescription, longDescription, thumbnailUrl, pageCount

    let[title,setTitle] = useState("")
    let[authors,setAuthors] = useState("")
    let[categories,setCategories] = useState("")
    let[pageCount,setPageCount] = useState("")
    let[shortDescription,setShort] = useState("")
    let[longDescription,setLong] = useState("")
    let[thumbnailUrl,setUrl] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();
        
        //data to be posted
        let bookData = {title, categories, authors, pageCount, shortDescription, longDescription, thumbnailUrl}
        
        //posting to the server
        fetch('http://localhost:5000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert('Book has been Added')
        navigate('/admin/book-list')
    }



    return (
        <div className="addbook">
            <h1>Add Book</h1>
            <div className="bookForm">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input value={title} onChange={(e) => setTitle(e.target.value) } type="text" required placeholder="Enter Title" />
                    </div>
                    <div className="authors">
                        <input value={authors} onChange={(e) => setAuthors(e.target.value)} type="text" required placeholder="Enter the Authors of the book" />
                    </div>
                    <div className="categories">
                        <input value={categories} onChange={(e) => setCategories(e.target.value)} type="text" required placeholder="Enter the category" />
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(e) => setPageCount(e.target.value)} type="number" placeholder="Page Count" />
                    </div>
                    <div className="shortDescription">
                        <textarea value={shortDescription} onChange={(e) => setShort(e.target.value)} cols="30" rows="10" placeholder="Short Description"></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea value={longDescription} onChange={(e) => setLong(e.target.value)} cols="30" rows="10" placeholder="Long Description"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input value={thumbnailUrl} onChange={(e) => setUrl(e.target.value)} type="text" placeholder="Thumbnail URL" />
                    </div>
                    <button id="btn2">Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;