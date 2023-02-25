import styled from 'styled-components';
import TitleH3 from '../atoms/TitleH3';
import Span from '../atoms/Span';
import Icon from '../atoms/Icon';
import { data } from "../../data/data";
import "../../assets/styles/global.css"

const StyledRow = styled.div`
    height: 18vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: #AE5CFF;
`;

function RowServices() {
    return ( 
        <StyledRow>
            <div className='div-center-elements'>
                <Icon icon={data.routes.alumn} />
                <TitleH3 text="Terapia Eficaz" />
                <Span p="Mediante un trato  comprometido,humano y personalizado" />
            </div>
            <div className='div-center-elements'>
                <Icon icon={data.routes.headIdea} />
                <TitleH3 text="Psicologia especializada" />
                <Span p="Cada caso es unico, abordando las terapias con tecnicas apropiadas." />
            </div>
            <div className='div-center-elements'>
                <Icon icon={data.routes.gps} />
                <TitleH3 text="Psicologos en Tuxtla Gutierrez Centro" />
                <Span p="Situados en Tuxtla Gutierrez Centro en diferentes puntos del primer plano de la ciudad" />

            </div>
        </StyledRow>
     );
}

export default RowServices;
