import { useRef, useEffect } from "react";

import Img from "../atoms/Img";
import Title from "../atoms/Title";
import Icon from "../atoms/Icon";
import TitleH2 from "../atoms/TitleH2";
import Span from "../atoms/Span";

import { data } from "../../data/data";

function Psycologist({ name, photo, address }) {

    const form = useRef()

    const handlerClick = (e) => {
        e.preventDefault();
        const cite = new FormData(form.current);
    }

    return (
        <div className="container">
            
                <div>
                    <img src={data.imgs.photo} className="photo" />
                </div>
                <div className="name-psyco">
                    <Title text="Adriana Gabriela Aquino Hernandez" color='black' />
                </div>

                <button className="button-cite" onClick={handlerClick}>Agendar Cita</button>
                
                <div className="address">
                    <div className="">
                        <Icon icon={data.routes.google} />
                    </div>
                    <div className="button-address">
                        <button className="button-margin">Direccion</button>
                    </div>
                </div>
            
        </div>
    );
}

export default Psycologist;