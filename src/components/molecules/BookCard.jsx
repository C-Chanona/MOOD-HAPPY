import Img from "../atoms/Img";
import TitleH4 from "../atoms/TitleH4";
import Icon from "../atoms/Icon";
import { data } from "../../data/data";
import "../../assets/styles/cards.css";

function BookCard() {
    return ( 
        <>
            <div className="books-containers">
                <div className="books-favorites">
                    <Icon icon={data.routes.love} />
                </div>
                <div>
                    <Img image={data.books.book1} />
                </div>
                <div className="books-name">
                    <TitleH4 text="La inteligencia emocional" />
                </div>
                <button className="books-button">Leer</button>
            </div>
        </>
     );
}

export default BookCard;