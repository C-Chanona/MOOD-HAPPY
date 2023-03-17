import { Link, useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import Swal from "sweetalert2"

import userContext from "../../context/UserContext";
import Logo from "../atoms/Logo";
import Title from "../atoms/Title";
import Span from "../atoms/Span";
import Data from "../molecules/Data";
import { data } from "../../data/data";
import "../../assets/styles/login.css";

function FormLogin() {
  const formLogin = useRef();
  const navigate = useNavigate();
  const { isUser, setIsUser } = useContext(userContext);

  const handlerClick = (e) => {
    e.preventDefault();

    const dataUser = new FormData(formLogin.current);
    //fetch
    fetch("https://moodhappy.iothings.com.mx:3000/Users/")
      .then(res => res.json())
      .then(data2 => {
        //VALIDACION DE USUARIO
        //busca si el usuario ingresado existe
        if (data2.find(user => user.username === dataUser.get('username'))) {
          //si lo encuentra lo alistamos en una variable
          const accountUser = data2.find(user => user.username === dataUser.get('username'));
          //evalua si la contraseña es la misma que dijito y lo envia al context
          if (accountUser.password === dataUser.get('password')) {
            setIsUser(accountUser);
            //<userContext.Provider value={accountUser} />
            Swal.fire({
              icon: 'success',
              title: 'Usuario encontrado!',
              text: 'Bienvenido de vuelta ' + accountUser.name
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/')
              }
            })

          }

        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Usuario no encontrado!',
            text: 'por favor vuelve a intentarlo :(',
          })
        }
      })

  };

  return (
    <>
      <div className="logo-center">
        <Logo img={data.routes.logoH} />
        <Title text="Bienvenidos a Mood Happy" />
      </div>
      <div class="fatter">

        <div>
          <form className="inputs-container" ref={formLogin}>
            <Data text='Nombre de Usuario:' type='text' placeholder='username' name="username" />
            <Data text='Contraseña:' type='password' placeholder='password' name="password" />

          </form>
          <div className="span">
            <Span p="¿Aun no tienes cuenta?" />
            <div><Link to="/Register">Click</Link></div>
          </div>

          <div>
            <Span p="Terminos de servicio," />
            <Span p="Politica de privacidad," />
            <Span p="Condiciones de uso" />
          </div>
          <button class="btn" onClick={handlerClick}>Iniciar sesion</button>
        </div>
      </div>
    </>

  );
}

export default FormLogin;
