import styled from 'styled-components';
import TitleH3 from '../atoms/TitleH3';
import Span from '../atoms/Span';
import Icon from '../atoms/Icon';
import { data } from "../../data/data";
import "../../assets/styles/global.css"

const StyledRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: #AE5CFF;

    @media screen and (min-width: 320px) and (max-width: 728px) {
        display: flex;
        flex-direction: column;
        
    }
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
                <div>
                    <Icon icon={data.routes.gps} />
                </div>
                <div>
                    <TitleH3 text="Psicologos en Tuxtla Gutierrez Centro" />
                </div>
                <div>
                    <Span p="Situados en Tuxtla Gutierrez Centro en diferentes puntos del primer plano de la ciudad" />
                </div>

            </div>
        </StyledRow>
    );
}

export default RowServices;
