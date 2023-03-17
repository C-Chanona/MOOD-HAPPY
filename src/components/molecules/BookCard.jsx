import Img from "../atoms/Img";
import TitleH4 from "../atoms/TitleH4";
import Icon from "../atoms/Icon";
import { data } from "../../data/data";
import "../../assets/styles/cards.css";

function BookCard({img, nameBook}) {
    return ( 
        <>
            <div className="books-containers">
                <div className="books-favorites">
                    <Icon icon={data.routes.love} />
                </div>
                <div>
                    <Img image={img} />
                </div>
                <div className="books-name">
                    <TitleH4 text={nameBook} />
                </div>
                <button className="books-button">Leer</button>
            </div>
        </>
     );
}

export default BookCard;