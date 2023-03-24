import styled from 'styled-components';

const StyledLabel = styled.label`
    color: white;
    color: ${props => props.color};
    font-size: 1.8rem;

    @media screen and (min-width: 320px) and (max-width: 728px) {
        font-size: 1.2rem;
    }
`;


function Label({text, color}) {
    return ( 
        <StyledLabel color={color}>{text}</StyledLabel>
     );
}

export default Label;