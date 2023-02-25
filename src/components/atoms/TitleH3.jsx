import styled from 'styled-components';

const StyledTitleH3 = styled.h3`
    font-family: Arial;
`;

function TitleH3({text}) {
    return ( 
        <StyledTitleH3>{text}</StyledTitleH3>
     );
}

export default TitleH3;