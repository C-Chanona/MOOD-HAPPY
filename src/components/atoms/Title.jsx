import styled from 'styled-components';

const StyledH1 = styled.h1`
    //color: ${(props) => ((props.color) ? "white": "yellow")}; 
    text-align: center;
    color: white;
    color: ${props => props.color} !important;

    @media screen and (min-width: 320px) and (max-width: 720px) {
        font-size: 1.6rem;
    }
`;

function Title({text,color}) {
    
    /*const prueba = text.indexOf('psicoterapias');
    if(text.slice(26,39) == 'psicoterapias')
    {
        const prueba2 = text.slice(26,39)
        //console.log(true + "la palabra es: " + prueba2)
    }*/
    return ( 
        <StyledH1 color={color}>{text}</StyledH1>
     );
}

export default Title;