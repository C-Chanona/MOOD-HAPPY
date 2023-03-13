import styled from 'styled-components';

const StyledH2 = styled.h2`
    text-align: center;
    color: white;
`;

function TitleH2({text}) {

    return ( 
        <StyledH2>{text}</StyledH2>
     );
}

export default TitleH2;