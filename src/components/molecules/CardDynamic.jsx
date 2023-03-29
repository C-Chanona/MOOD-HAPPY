import { useState } from 'react';
import Title from '../atoms/Title';
import TitleH3 from '../atoms/TitleH3';
import Img from '../atoms/Img';
import Span from '../atoms/Span';
import "../../assets/styles/cards.css"

function CardDynamic({ text, img, p, imageDes }) {

    const [cardVisible, setCardVisible] = useState(false);

    const handlerClick = (e) => {
        e.preventDefault();

        setCardVisible(!cardVisible);
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
                            <Span p={p.desGeneral} />
                        </div>
                        <button className='buttoncard' onClick={handlerClick}>Leer mas</button>
                    </div>
                </div>
            </div> 
            <div className={`modal-cards ${cardVisible ? 'modal-shows-cards' : ''}`} >
                <div className="modal-container-cards">
                    <div>
                        <Title text={text} color="#2D26A0" />
                    </div>
                    <div className="content-cards">
                        <Span p={p.des1} />
                        <div className="image-left">
                            <Img image={imageDes.imageDes1} />
                        </div>
                        <Span p={p.des2} />
                        <div className="image-right">
                            <Img image={imageDes.imageDes2} />
                        </div>
                        <Span p={p.des3} />
                        <div className="image-left">
                            <Img image={imageDes.imageDes3}/>
                        </div>
                        <Span p={p.des4} />
                        <div className="image-right">
                            <Img image={imageDes.imageDes4} />
                        </div>
                    </div>
                    <button className="modal-close-cards" onClick={handlerClick}>Cerrar</button>
                </div>
            </div>
            
        </>

    );
}

export default CardDynamic;