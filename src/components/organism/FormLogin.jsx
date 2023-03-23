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
    fetch(`https://moodhappy.iothings.com.mx:3000/Users/${dataUser.get("username")}/${dataUser.get("password")}`)
      .then(res => res.json())
      .then(user => {

        if (user.message) {
          Swal.fire({
            icon: 'error',
            title: user.message,
            text: 'por favor vuelve a intentarlo :(',
          });
        }
        
        else {
          //context
          const accountUser = user;
          setIsUser(accountUser);
          <userContext.Provider value={accountUser} />
          Swal.fire({
            icon: 'success',
            title: 'Usuario encontrado!',
            text: 'Bienvenido de vuelta ' + accountUser.name
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/')
            }
          });
        }
      });
  };

  return (
    <div className="fatter">

      <div className="logo-center">
        <Logo img={data.routes.logoH} />
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
