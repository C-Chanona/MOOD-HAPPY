import { useState, useEffect } from "react";

import BookCard from "../molecules/BookCard";
import "../../assets/styles/global.css"

function RowBooks() {

    const [books, setBooks] = useState([]);
    //useEffect se ejecuta despues del primer renderizado
    useEffect(() => {
        console.log("antes del useEffect");
        fetch("https://moodhappy.iothings.com.mx:3000/Books/")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooks(data);
            })
    }, [])

    return (
        <div className="columns-5">
            {books.map(book => <BookCard key={book.id} img={book.image} nameBook={book.name} />)}
        </div>
    );
}

export default RowBooks;