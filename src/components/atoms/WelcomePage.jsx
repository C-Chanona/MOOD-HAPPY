import styled from 'styled-components';

const StyledH1 = styled.h1`
    text-align: center;
    color: #FFDA15;
`;

function WelcomePage({text}) {
    return ( 
        <StyledH1>{text}</StyledH1>
     );
}

export default WelcomePage;