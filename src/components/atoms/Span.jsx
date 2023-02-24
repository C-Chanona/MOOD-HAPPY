import styled from 'styled-components';

const StyledSpan = styled.span`
    color: black;
`;


function Span({p}) {
    return ( 
        <StyledSpan>{p}</StyledSpan>
     );
}

export default Span;