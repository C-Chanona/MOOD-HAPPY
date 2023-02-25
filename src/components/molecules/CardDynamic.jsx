import styled from 'styled-components';
import TitleH3 from '../atoms/TitleH3';
import Img from '../atoms/Img';
import Span from '../atoms/Span';
import { data } from "../../data/data";

const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    border: 2px solid black;

`;


function CardDynamic() {
    return ( 
        <StyledDiv>
            <div>
                <Img image={data.routes.logoF} />
            </div>
            <div>
                <TitleH3 text="Descripcion"></TitleH3>
                <Span p=" hola mundo" />
            </div>

        </StyledDiv>
     );
}

export default CardDynamic;