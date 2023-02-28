import styled from 'styled-components';
import CardDynamic from "../molecules/CardDynamic";
import { data } from "../../data/data";

const StyledRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 15px;
    margin: 2%;
`;

//cambiar por un map

function RowCards() {
    return ( 
        <StyledRow>
            
            <CardDynamic text='Ira' img={data.imgs.ira} p="La ira lastima no solamente a tu paz mental, 
            tambien puede herir a travez de ti mas de lo que crees, sabemos que no es eso lo que buscas." />

            <CardDynamic text="Estres" img={data.imgs.estres} p="El estres puede afectar de manera fisica y mental conforme a tus actividades, 
            aqui te contamos como sobre pasar este mal rato." />

            <CardDynamic text="Tristeza" img={data.imgs.triste} p="La tristeza ocaciona el rezaso social lo cual conlleva a tener 
            soprepensamientos u otras actitudes perjudiciales a tu persona, sabemos que estas pasando por un mal rato asi que permitenos ayudarte." />

            <CardDynamic text="Frustracion" img={data.imgs.frustracion} p="La frustracion puede afectar mental-mente ya sea en ideas o proyecto, 
            ya que la fustacion te desanima y eso ocaciona a que ya no quieras trabajar, y no solo a ti, si no tambien a las personas de tu alrededor." />

            <CardDynamic text="Ansiedad" img={data.imgs.ansiosa} p="La ansiedad afecta de igual manera que la frustracio, lo que lo diferencia de la frustracion 
            es que la ansiedad es el primer paso a la frustracion ya que esto conlleva que mental-mente no se piense de la mejor manera " />

            <CardDynamic text="Miedo" img={data.imgs.miedo} p="El miedo en muchas sicurstancias es buena, pero llega tambien a pergudicar, 
            ya que por el miedo no experimentamos muchas cosas, y nos alejamos cada ves mas de las personas." />

        </StyledRow>
     );
}

export default RowCards;