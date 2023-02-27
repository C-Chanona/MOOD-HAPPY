import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    height: 60.16px;
    background: #AE5CFF;
    border-radius: 20px;
`;

function Button({action}) {
    return ( 
        <StyledButton >{action}</StyledButton>
     );
}

export default Button;
