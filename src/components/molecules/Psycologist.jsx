import { useRef, useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import Title from "../atoms/Title";
import Icon from "../atoms/Icon";
import Data from "../molecules/Data";

import { data } from "../../data/data";

import "../../assets/styles/cards.css";

function Psycologist({ name, photo, address }) {


    const [formVisible, setFormVisible] = useState(false);
    const formCite = useRef();

    const handlerClick = (e) => {
        e.preventDefault();

        setFormVisible(!formVisible);
    }

    const handlerClickConfirm = (e) => {

        setFormVisible(!formVisible);
        const cite = new FormData(formCite.current);
    }
    const handlerClickAddress = (e) => {
        e.preventDefault();

    }

    return (
        <div className="container">

            <div>
                <img src={data.imgs.photo} className="photo" />
            </div>
            <div className="name-psyco">
                <Title text="Adriana Gabriela Aquino Hernandez" color='black' />
            </div>

            <button className="button-cite" onClick={handlerClick}>Agenda una Cita</button>

            <div className="address">
                <div className="">
                    <Icon icon={data.routes.google} />
                </div>
                <div className="button-address">
                    <button className="button-margin" onClick={handlerClickAddress}>Direccion</button>
                </div>
            </div>

            <div className={`modal ${formVisible ? 'modal-shows' : ''}`} >
                <div className="modal-container">
                    <form ref={formCite}>
                        <Data text="Paciente" type="text" placeholder="Username" name="paciente" color="green" />
                        <Data text="Edad" type="text" placeholder="age" name="age" color="green" />
                        <Data text="Hora" type="time" placeholder="hora" name="hour" color="green" />
                        <Data text='Fecha a asistir' type='date' color="green" />
                    </form>

                    <button className="modal-close" onClick={handlerClickConfirm}>Confirmar Cita</button>
                </div>
            </div>
        </div>
    );
}

export default Psycologist;