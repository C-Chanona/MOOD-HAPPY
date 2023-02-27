import styled from 'styled-components';

const StyledLabel = styled.label`
    color: white;
    font-size: 1rem;
`;


function Label({text}) {
    return ( 
        <StyledLabel>{text}</StyledLabel>
     );
}

export default Label;