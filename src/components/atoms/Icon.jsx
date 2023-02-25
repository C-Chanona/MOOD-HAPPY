import styled from 'styled-components';
import {data} from "../../data/data"

const StyledIcon = styled.img`
    width: ${props => props.src == data.routes.insta || props.src == data.routes.face|| props.src == data.routes.twitter ? "50px" : "100px" };
    height: 50px;
`;

function Icon({icon}) {
    return ( 
        <StyledIcon src={icon} />
     );
}

export default Icon;