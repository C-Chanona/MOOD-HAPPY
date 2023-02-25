import styled from 'styled-components';

const StyledIcon = styled.img`
    width: 50px;
    height: 50px;
`;

function Icon({icon}) {
    return ( 
        <StyledIcon src={icon} />
     );
}

export default Icon;