import Swal from 'sweetalert2';
import TitleH3 from '../atoms/TitleH3';
import Img from '../atoms/Img';
import Span from '../atoms/Span';
import "../../assets/styles/cards.css"

function CardDynamic({ text, img, p }) {

    const handlerClick = (e) => {
        e.preventDefault();
        // let modal = document.querySelector(".modal");
        // modal.classList.add('modal-shows');

        Swal.fire({
            title: text,
            confirmButtonText: "Cerrar",
            customClass: {
                confirmButton: "modal-close"
            },


        })

    }
    const handlerClickClose = (e) => {
        e.preventDefault();
        // let modal = document.querySelector(".modal");
        // modal.classList.remove('modal-shows');

    }

    return (
        <>
            <div className='dynamic-fatter'>
                <TitleH3 text={text} />
                <div className='dynamic-child'>
                    <div className='media'>
                        <div>
                            <Img image={img} />
                        </div>
                        <div>
                            <TitleH3 text="Descripcion"></TitleH3>
                        </div>
                        <div>
                            <Span p={p} />
                        </div>
                        <button className='buttoncard' onClick={handlerClick}>Leer mas</button>
                    </div>
                </div>
            </div>

            <div className="modal">
                <div className="modal-container">
                    <Img></Img>
                    <h2 className="">hola mundo</h2>
                    <button className="modal-close" onClick={handlerClickClose}>Cerrar</button>
                </div>
            </div>
        </>

    );
}

export default CardDynamic;