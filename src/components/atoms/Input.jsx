import styled from 'styled-components';

const StyledInput = styled.input`
    width: 90%;
    height: 3.125rem;
    font-size: 1em;
    padding-left: 20px;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    letter-spacing: 1px;
    box-sizing: border-box;
    
`;


function Input({type,placeholder}) {
    return ( 
        <StyledInput type={type} placeholder={placeholder} required />
     );
}

export default Input;