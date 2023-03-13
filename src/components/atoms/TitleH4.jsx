import styled from 'styled-components';

const StyledTitleH4 = styled.h4`
    font-family: 'Courier New', Courier, monospace;
`;


function TitleH4({text}) {
    return ( 
        <StyledTitleH4>{text}</StyledTitleH4>
     );
}

export default TitleH4;