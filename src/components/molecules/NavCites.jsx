import Span from "../atoms/Span";
import Icon from "../atoms/Icon";
import { data } from "../../data/data";
function NavCites() {
    return (
        <div className="nav-cites">
            <div className="child">
                <div>
                    <Icon icon={data.routes.building} />
                </div>
                <div>
                    <Span p="Terapia Presencial" />
                </div>
            </div>

            <div className="child">
                <div>
                    <Icon icon={data.routes.video} />
                </div>
                <div>
                    <Span p="Terapia en linea" />
                </div>
            </div>
            <div className="child">
                <Span p="Servicio" />
            </div>
        </div>
    );
}

export default NavCites;