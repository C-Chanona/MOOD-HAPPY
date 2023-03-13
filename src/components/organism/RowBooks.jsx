import BookCard from "../molecules/BookCard";
import "../../assets/styles/global.css"

function RowBooks() {
    return ( 
        <div className="columns-5">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
        </div>
     );
}

export default RowBooks;