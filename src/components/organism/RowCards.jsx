import styled from 'styled-components';
import CardDynamic from "../molecules/CardDynamic";

const StyledRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
`;


function RowCards() {
    return ( 
        <StyledRow>
            <CardDynamic />
            <CardDynamic />
            <CardDynamic />
        </StyledRow>
     );
}

export default RowCards;