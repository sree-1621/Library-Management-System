import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {

    let params = useParams()
    let [book, bookData] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:5000/books/${params.id}`)
            let data = await response.json()
            bookData(data)
        }
        fetchData()
    })

    return (
        <div className="readbook">
            <div className="bookCard">
                <h1>{book.title}</h1>
                <p><b>{book.shortDescription}</b></p>
                <p>{book.longDescription}</p>
            </div>
        </div>
    );
}

export default ReadBook;