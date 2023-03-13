import TitleH3 from "../atoms/TitleH3";
import TitleH4 from "../atoms/TitleH4";
import Span from "../atoms/Span";
import "../../assets/styles/cards.css";

function ActCard() {
    return ( 
        <div className="activities-container">
            <div className="activities-title">
                <TitleH3 text="Autoestima" />
            </div>
            <div className="activities-image">
                
            </div>
            <div className="activities-course">
                <TitleH4 text='Curso #1' />
            </div>
            <div className="activities-description">
                <div className="activities-descriptions-title">
                    <TitleH4 text="Descripcion" />
                </div>
                <div className="activities-descriptions-text">
                    <Span p="Trabajar las emocines a traves del arte de la arteterapia mejora la calidad de las relaciones humanas por que se centra en el factor emocional, escencial en todo ser humano, ayudandonos a ser mas conciente de aspectos oscuros, y facilitando, de este modo, el desarrollo de la persona." />
                </div>
            </div>
            <button className="activities-button">Leer más</button>

        </div>
     );
}

export default ActCard;