import { useState, useEffect } from "react";
import CardDynamic from "../molecules/CardDynamic";
import { data } from "../../data/data";
import "../../assets/styles/global.css"

//cambiar por un map

function RowCards() {

    const [dynamics, setDynamic] = useState([]);

    useEffect(() => {
        fetch("https://moodhappy.iothings.com.mx:3000/Dynamics/")
        .then(res => res.json())
        .then(data => {
            setDynamic(data);
        })
    }, [])
    return ( 
        <div className='columns-3'>

            {
                dynamics.map(dynamic => <CardDynamic 
                    key={dynamic.id} 
                    text={dynamic.name} 
                    img={dynamic.image} 
                    p={dynamic.description.desGeneral} /> )
            }
            
            {/*
            <CardDynamic text="Tristeza" img={data.imgs.triste} p="La tristeza ocaciona el rezaso social lo cual conlleva a tener 
            soprepensamientos u otras actitudes perjudiciales a tu persona, sabemos que estas pasando por un mal rato asi que permitenos ayudarte." />

            <CardDynamic text="Frustracion" img={data.imgs.frustracion} p="La frustracion puede afectar mental-mente ya sea en ideas o proyecto, 
            ya que la fustacion te desanima y eso ocaciona a que ya no quieras trabajar, y no solo a ti, si no tambien a las personas de tu alrededor." />

            <CardDynamic text="Ansiedad" img={data.imgs.ansiosa} p="La ansiedad afecta de igual manera que la frustracio, lo que lo diferencia de la frustracion 
            es que la ansiedad es el primer paso a la frustracion ya que esto conlleva que mental-mente no se piense de la mejor manera " />

            <CardDynamic text="Miedo" img={data.imgs.miedo} p="El miedo en muchas sicurstancias es buena, pero llega tambien a pergudicar, 
            ya que por el miedo no experimentamos muchas cosas, y nos alejamos cada ves mas de las personas." /> */}

        </div>
     );
}

export default RowCards;