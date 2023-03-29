import { useState, useEffect } from "react";
import CardDynamic from "../molecules/CardDynamic";
import "../../assets/styles/global.css";
import { data } from "../../data/data";

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
                    p={dynamic.description}
                    imageDes={dynamic.imagesDes} /> )
            }
            
        </div>
     );
}

export default RowCards;