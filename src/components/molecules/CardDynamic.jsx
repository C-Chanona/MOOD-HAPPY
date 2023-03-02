import { useState } from 'react';

import styled from 'styled-components';
import TitleH3 from '../atoms/TitleH3';
import Img from '../atoms/Img';
import Span from '../atoms/Span';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import "../../assets/styles/cards.css"

const StyledDiv = styled.div`
    width: 100%;
    border: 2px solid black;
    text-align: center;
`;

const Div = styled.div`
    display: flex;
    align-items: center;
    font-size: 1rem;
    
`;

function CardDynamic({ text, img, p }) {
    const [isOPen, setIsOpen] = useState(false);

    const handlerClick = (e) => {
        e.preventDefault();
        const modal = document.querySelector(".modal");
        modal.classList.add('modal-shows');

        //setIsOpen(!isOPen);
    }
    const handlerClickClose = (e) => {
        e.preventDefault();
        const modal = document.querySelector(".modal");
        modal.classList.remove('modal-shows');
        
        //setIsOpen(!isOPen);
    }

    return (
        <>
            <StyledDiv>
                <TitleH3 text={text} />
                <Div>
                    <div className='media'>
                        <Img image={img} />
                    </div>
                    <div className='media'>
                        <TitleH3 text="Descripcion"></TitleH3>
                        <Span p={p} />
                    </div>

                </Div>
                <div>
                    <button className='buttoncard' onClick={handlerClick}>Leer mas</button>
                </div>

            </StyledDiv>

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