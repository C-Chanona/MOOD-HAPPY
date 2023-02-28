import styled from 'styled-components';
import TitleH3 from '../atoms/TitleH3';
import Img from '../atoms/Img';
import Span from '../atoms/Span';
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
    return (
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
                <button className='buttoncard'>Leer mas</button>
            </div>

        </StyledDiv>
    );
}

export default CardDynamic;