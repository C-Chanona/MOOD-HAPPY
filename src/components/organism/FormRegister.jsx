import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Logo from "../atoms/Logo";
import Data from "../molecules/Data";
import Span from "../atoms/Span";

import { data } from "../../data/data";

import "../../assets/styles/register.css"



function FormRegister() {
    const formRegister = useRef();
    const navigate = useNavigate()
    const handlerClick = (e) => {
        e.preventDefault();

        const newUser = new FormData(formRegister.current);
        //fetch
        fetch("https://moodhappy.iothings.com.mx:3000/Users/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: newUser.get('name'),
                lastname: newUser.get('lastname'),
                username: newUser.get('username'),
                email: newUser.get('email'),
                password: newUser.get('password')
            })
        })
            .then(response => response.json())
            .then(data2 => {
                if (data2) {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Registro completo!',
                        text: 'Gracias por ser parte de Mood-Happy =) '
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate("/Sign in");
                        }
                    });
                }
            });
    };

    return (
        <div className="div-father">
            <div className="logo-regist">
                <Logo img={data.routes.logoH} />
            </div>
            <div className="form-regist">
                <form className="inputs-regist" ref={formRegister}>
                    <Data text='Nombre:' type='text' placeholder='Name' name="name" />
                    <Data text='Apellido:' type='text' placeholder='Lastname' name="lastname" />
                    <Data text='Nombre de usuario:' type='text' placeholder='Username' name='username' />
                    <Data text='Correo:' type='email' placeholder='Email' name='email' />
                    <Data text='Contraseña:' type='password' placeholder='Password' name='password' />
                    <Data text='Confirmar Contraseña:' type='password' placeholder='Password' name='conPass' />
                </form>
                <div className="text-confirm-info">
                    <Span p="Al hacer clic en Confirmar, aceptas las Condiciones y confirmas que has leido nuestra Politica de privacidad incluido los Terminos de servicio" />
                </div>
                <div className="button-position">
                    <button className="button" onClick={handlerClick}>Confirmar</button>
                </div>
            </div>

        </div>
    );
}

export default FormRegister;