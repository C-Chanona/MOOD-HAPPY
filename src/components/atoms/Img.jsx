import styled from 'styled-components';

const StyledImage = styled.img`
    width: 100%;
`;

function Img({image}) {
    return ( 
        <StyledImage src={image} />
     );
}

export default Img;