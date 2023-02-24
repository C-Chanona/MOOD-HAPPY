import { Link } from "react-router-dom";
import { data } from "../../data/data";

import Logo from "../atoms/Logo";
import Title from "../atoms/Title";
import "../../assets/styles/header.css"

function Header() {
    return (
        <>
            <div className="header">
                <div className="icon">
                    <Logo img={data.routes.logoH} />
                </div>
                <div className="items-center" id="colors">
                    <Link to="/Home"> Inicio</Link>
                    <nav id="menu">
                        <ul>
                            <li><Link to="/Dynamics" >Citas</Link>
                                <ul>
                                    <li><Link to="/Dynamics" >Terapia Presencial</Link></li>
                                    <li><Link to="/Home" >Terapia en linea</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <Link  to="/Dynamics">Dinamicas</Link>
                    <Link  to="/Books">Libros</Link>
                    <Link  to="/Sign In">Iniciar sesion</Link>
                </div>
                <div className="welcome"> 
                    <Title text="BIENVENIDO A MOOD-HAPPY" ></Title>
                    <Title text="Servicio especializado en psicoterapias online y presencial." />
                    <Title text="Apoyo emocional de forma dinamica." />
                    <Title text="Mini curso de tareas para el mejoramiento de mi persona" />
                </div>
            </div>
            <div className="gradient"></div>
        </>
    );
}

export default Header;