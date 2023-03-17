import styled from 'styled-components';

const StyledInput = styled.input`
    width: 90%;
    height: 4.5rem;
    font-size: 1.6rem;
    padding-left: 20px;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    letter-spacing: 1px;
    box-sizing: border-box;
    color: #AE5CFF;
`;


function Input({type,placeholder,name}) {
    return ( 
        <StyledInput type={type} placeholder={placeholder} name={name} required />
     );
}

export default Input;