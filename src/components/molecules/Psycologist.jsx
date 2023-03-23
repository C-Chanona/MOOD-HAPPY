import { useRef, useEffect, useState } from "react";
import Title from "../atoms/Title";
import Icon from "../atoms/Icon";
import { data } from "../../data/data";

import "../../assets/styles/cards.css";

function Psycologist({ name, photo, address }) {


    const [formVisible, setFormVisible] = useState(false);
    const form = useRef();

    const handlerClick = (e) => {
        e.preventDefault();

        setFormVisible(!formVisible);
        const cite = new FormData(form.current);
    }

    useEffect(() => {

    },[]);

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
                    <button className="button-margin" onClick={handlerClick}>Direccion</button>
                </div>
            </div>

            {/* <div className="modal">
                <div className="modal-shows">
                    <h1>Hola</h1>
                </div>
            </div> */}
        </div>
    );
}

export default Psycologist;