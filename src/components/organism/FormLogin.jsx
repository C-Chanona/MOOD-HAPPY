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

  const { user, setUser } = useContext(userContext);

  const handlerClick = (e) => {
    e.preventDefault();

    const dataUser = new FormData(formLogin.current);
    //fetch
    fetch(`https://moodhappy.iothings.com.mx:3000/Users/${dataUser.get("username")}/${dataUser.get("password")}`)
      .then(res => res.json())
      .then(userToken => {

        if (userToken.message) {
          Swal.fire({
            icon: 'error',
            title: user.message,
            text: 'por favor vuelve a intentarlo :(',
          });
        }

        else {
          //token
          localStorage.setItem("Token", userToken.data.token);
          
          fetch("https://moodhappy.iothings.com.mx:3000/Users/validate", {
            headers: {
              "auth-token": ` ${localStorage.getItem('Token')}`,
            },
          })
            .then(res => res.json())
            .then(userValidate => {
              console.log(userValidate.data.user);
              //context
              const accountUser = userValidate.data.user;
              console.log("hola soy lo que contine accountUser " + "\n" + accountUser);
              setUser(accountUser);

              Swal.fire({
                icon: 'success',
                title: 'Usuario encontrado!',
                text: 'Bienvenido de vuelta ' + userValidate.data.user.name
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/')
                }
              });
            })
        }
      });
  };

  return (
    <div className="fatter">

      <div className="logo-center">
        <Logo img={data.routes.logoH} size />
        <Title text="Bienvenidos a Mood Happy" />
      </div>

      <div class="account">
        <form className="inputs-container" ref={formLogin}>
          <Data text='Nombre de Usuario:' type='text' placeholder='username' name="username" />
          <Data text='Contraseña:' type='password' placeholder='password' name="password" />
        </form>
        <div className="button-account">
          <button class="btn" onClick={handlerClick}>Iniciar sesion</button>
        </div>
      </div>


      <div class="span">
        <Span p="¿Aun no tienes cuenta?" />
        <Link to="/Register" id="linkRegist">Registrarse</Link>
      </div>

      <div class="info">
        <Link to="/" id="te">Terminos de servicio</Link>
        <Link to="/" id="po">Politica de privacidad</Link>
        <Link to="/" id="co">Condiciones de uso</Link>
      </div>

      <div className="back">
        <Link to="/" id="back" >Volver al inicio</Link>
      </div>

    </div>

  );
}

export default FormLogin;
