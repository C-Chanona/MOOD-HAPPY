import styled from "styled-components";
import TitleH3 from "../atoms/TitleH3";
import Img from "../atoms/Img";
import Span from "../atoms/Span";

import {data} from "../../data/data"

const StyledLib = styled.lib`
    width: 100%;
    height: 100%;
    display: flex;
    border: 3px solid red;
    flex-direction: column;
    align-items: center;
    width: 420px;
`

function CardBook() {
    return ( 
        <StyledLib>
            <div>
                <TitleH3 text="Title"></TitleH3>
            </div>
            <div>
                <Img image={data.routes.logoF}></Img>
            </div>
            <div>
                <Span p="Descripcion"></Span>
            </div>
        </StyledLib>
     );
}

export default CardBook;