import { Link } from "react-router-dom";
import { data } from "../../data/data";

import Logo from "../atoms/Logo";
import Title from "../atoms/Title";
import "../../assets/styles/header.css"
import WelcomePage from "../atoms/WelcomePage";

function Header({title,text,text2,text3,}) {
    return (
        <>
            <div className="header">
                <div className="icon">
                    <Logo img={data.routes.logoH} />
                </div>
                <div className="items-center" id="colors">
                    <Link to="/"> Inicio</Link>
                    <nav id="menu">
                        <ul>
                            <li><Link to="" >Citas</Link>
                                <ul>
                                    <li><Link to="/Cites" >Terapia Presencial</Link></li>
                                    <li><Link to="https://meet.google.com/" >Terapia en linea</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <Link  to="/Dynamics">Dinamicas</Link>
                    <Link to="/Activities">Actividades</Link>
                    <Link  to="/Books">Libros</Link>
                    <Link  to="/Sign In">Iniciar sesion</Link>
                </div>
                <div className="welcome"> 
                    <WelcomePage text={title} />
                    <Title text={text} />
                    <Title text={text2} />
                    <Title text={text3} />
                </div>
            </div>
            <div className="gradient"></div>
        </>
    );
}

export default Header;