import { Link } from "react-router-dom";

import Span from "../atoms/Span";
import Icon from "../atoms/Icon";

import { data } from "../../data/data";

function NavCites() {
    return (
        <div className="nav-cites">
            <div className="child" id="child">
                <div>
                    <Icon icon={data.routes.building} />
                </div>
                <div>
                    <Link to="/cites" id="navCite" >Terapia Presencial</Link>
                </div>
            </div>

            <div className="child" id="child2">
                <div>
                    <Icon icon={data.routes.video} />
                </div>
                <div>
                    <Link to="https://meet.google.com/" id="navCite" >Terapia en Linea</Link>
                </div>
            </div>
            <div className="child" id="child3">
                <Link to="/aboutWe" id="navCite" >Servicio</Link>
            </div>
        </div>
    );
}

export default NavCites;