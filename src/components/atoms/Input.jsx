import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    height: 4.5rem;
    font-size: 1.6rem;
    padding-left: 20px;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    box-sizing: border-box;
    color: #AE5CFF;

    @media screen and (min-width: 320px) and (max-width: 728px) {
        width: 100%;
        font-size: 1.2rem;
    }
`;


function Input({type,placeholder,name}) {
    return ( 
        <StyledInput type={type} placeholder={placeholder} name={name} required />
     );
}

export default Input;