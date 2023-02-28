import { useRef } from "react";
import { useNavigate } from "react-router-dom"

import Logo from "../atoms/Logo";
import Data from "../molecules/Data";

import { data } from "../../data/data";

import "../../assets/styles/register.css"



function FormRegister() {
    const formRegister = useRef();
    const navigate = useNavigate()
    const handlerClick = (e) => {
        e.preventDefault();

        const newUser = new FormData(formRegister.current);
        //fetch
        fetch("http://52.7.252.226:3000/Users",{
            method: POST,
            
        })


        navigate('/')
    };

    return (
        <div className="div-father">
            <div>
                <Logo img={data.routes.logoH} />
            </div>
            <div className="divs">
                <form ref={formRegister}>
                    <Data text='Nombre:' type='text' placeholder='Name' name="name" />
                    <Data text='Apellido:' type='text' placeholder='Lastname' name="lastname" />
                    <Data text='Nombre de usuario:' type='text' placeholder='Username' name='username' />
                    <Data text='Correo' type='email' placeholder='Email' name='email' />
                    <Data text='Contraseña:' type='password' placeholder='Password' name='password' />
                    <Data text='Confirmar Contraseña:' type='password' placeholder='Password' name='conPass' />
                </form>
            </div>
            <div className="divs">
                <button className="button" onClick={handlerClick}>Confirmar</button>
            </div>
        </div>
    );
}

export default FormRegister;