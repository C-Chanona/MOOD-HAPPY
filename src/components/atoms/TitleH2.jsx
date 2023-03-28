import styled from 'styled-components';

const StyledH2 = styled.h2`
    text-align: center;
    color: white;

    @media screen and (min-width: 320px) and (max-width: 768px) {
        font-size: 1rem;
    }
`;

function TitleH2({text}) {

    return ( 
        <StyledH2>{text}</StyledH2>
     );
}

export default TitleH2;