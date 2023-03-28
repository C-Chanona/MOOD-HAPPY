import Img from "../atoms/Img";
import TitleH4 from "../atoms/TitleH4";
import "../../assets/styles/cards.css";

function BookCard({img, nameBook}) {

    const handlerClick = (e) =>{
        e.preventDefault();

        fetch("https://moodhappy.iothings.com.mx:3000/Books/",{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // aqui va todo lo que enviare para hacer la lista de favoritos
            })
        })
    }

    return ( 
        <>
            <div className="books-containers">
                <div className="books-favorites">
                    <button className="books-love-button" onClick={handlerClick}></button>
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