import { useState } from "react";
import Title from "../atoms/Title";
import TitleH3 from "../atoms/TitleH3";
import TitleH4 from "../atoms/TitleH4";
import Span from "../atoms/Span";
import Data from "./Data";

import "../../assets/styles/cards.css";


function ActCard({ course, number, description, tasks }) {

    const [cardVisible, setCardVisible] = useState(false);

    const handlerClick = (e) => {
        e.preventDefault();

        setCardVisible(!cardVisible);
    }

    return (
        <div>
            <div className="activities-container">
                <div className="activities-title">
                    <TitleH3 text={course} />
                </div>
                <div className="activities-image">

                </div>
                <div className="activities-course">
                    <TitleH4 text={`curso# ${number}`} />
                </div>
                <div className="activities-description">
                    <div className="activities-descriptions-title">
                        <TitleH4 text="Descripcion" />
                    </div>
                    <div className="activities-descriptions-text">
                        <Span p={description} />
                    </div>
                </div>
                <button className="activities-button" onClick={handlerClick}>Leer más</button>
            </div>
            <div className={`modal-cards ${cardVisible ? 'modal-shows-cards' : ''}`} >
                <div className="modal-container-cards">
                    <div>
                        <Title text={course} color="#2D26A0" />
                    </div>
                    <div className="content-card">
                        <Span p={tasks.task1} />
                        <div className="image-right">
                            <Data text="Listo" type="checkbox" color='#00C040' name='task1' />
                        </div>
                        <Span p={tasks.task2} />
                        <div className="image-right">
                            <Data text="Listo" type="checkbox" color='#00C040' name='task2' />
                        </div>
                        <Span p={tasks.task3} />
                        <div className="image-right">
                            <Data text="Listo" type="checkbox" color='#00C040' name='task3' />
                        </div>
                        <Span p={tasks.task4} />
                        <div className="image-right">
                            <Data text="Listo" type="checkbox" color='#00C040' name='task4' />
                        </div>
                        <Span p={tasks.task5} />
                        <div className="image-right">
                            <Data text="Listo" type="checkbox" color='#00C040' name='task5' />
                        </div>
                        <Span p={tasks.task6} />
                        <div className="image-right">
                            <Data text="Listo" type="checkbox" color='#00C040' name='task6' />
                        </div>
                        <Span p={tasks.task7} />
                        <div className="image-right">
                            <Data text="Listo" type="checkbox" color='#00C040' name='task7' />
                        </div>
                    </div>
                    <button className="modal-close-cards" onClick={handlerClick}>Cerrar</button>
                </div>
            </div>
        </div>


    );
}

export default ActCard;