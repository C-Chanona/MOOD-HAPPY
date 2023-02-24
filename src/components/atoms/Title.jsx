import styled from 'styled-components';

const StyledH1 = styled.h1`
    /* color: ${(props) => ((props) ? "white": "yellow")}; */
    color: white;
`;

function Title({text}) {
    /*const prueba = text.indexOf('psicoterapias');
    if(text.slice(26,39) == 'psicoterapias')
    {
        const prueba2 = text.slice(26,39)
        //console.log(true + "la palabra es: " + prueba2)
    }*/
    return ( 
        <StyledH1>{text}</StyledH1>
     );
}

export default Title;