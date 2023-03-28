import styled from 'styled-components';

const StyledSpan = styled.span`
    font-size: 1.6rem;

    @media screen and (min-width: 320px) and (max-width: 720px) {
        font-size: 1.2rem;
    }
`;

function Span({p}) {
    return ( 
        <StyledSpan>{p}</StyledSpan>
     );
}

export default Span;