import styled from 'styled-components';

const StyledImg = styled.img`
    width: ${props => props.sizing ? "35%" : "100%" };
    height: 100%;
    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 85%;
        height: 85%;
    }
`;


function Logo( {img, size}) {
    return ( 
        <StyledImg sizing={size} src={img} />
     );
}

export default Logo;