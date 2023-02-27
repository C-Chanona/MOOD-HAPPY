import Input from "../atoms/Input";
import Label from "../atoms/Label";
import styled from 'styled-components';

const StyledDivColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    gap: 5px;
`;

function Data({text,type,placeholder,name}) {
    return ( 
        <StyledDivColumn>
            <Label text={text} />
            <Input type={type} placeholder={placeholder} name={name} />
        </StyledDivColumn>
     );
}

export default Data;

