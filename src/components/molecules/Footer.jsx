import TitleH2 from "../atoms/TitleH2";
import Span from "../atoms/Span";
import Logo from "../atoms/Logo";
import Icon from "../atoms/Icon";
import { data } from "../../data/data";
import "../../assets/styles/footer.css";

function Footer() {
    return (
        <div className="div-content ">
            <div className="div-border-top">
                <div className="div-childs">
                    <TitleH2 text="Conocenos" />
                    <Span p="Acerca de Nosotros" />
                    <Span p="Preguntas Frecuentes" />
                    <Span p="Politicas de Privacidad" />
                </div>
            </div>
            <div className="div-father-center">
                <div className="div-social-icons">
                    <Icon icon={data.routes.insta} />
                    <Icon icon={data.routes.twitter} />
                    <Icon icon={data.routes.face} />
                </div>
                <div className="div-image">
                    <Logo img={data.routes.logoF} />
                    <Span p="© 2023 Mood Happy" />
                </div>
            </div>
            <div className="div-border-top">
                <div className="div-childs">
                    <TitleH2 text="Soporte" />
                    <Span p="+52 961 881 0568" />
                    <Span p="+52 961 333 7265" />
                    <Span p="moodhappy:)@gmail.com" />
                </div>
            </div>
        </div>
    );
}

export default Footer;