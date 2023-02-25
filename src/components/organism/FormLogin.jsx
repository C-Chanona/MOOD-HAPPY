import { Link } from "react-router-dom"

import Logo from "../atoms/Logo";
import Title from "../atoms/Title";
import Span from "../atoms/Span";
import Input from "../atoms/Input";
import TitleH3 from "../atoms/TitleH3";
import { data } from "../../data/data";
import "../../assets/styles/Login.css"

function FormLogin() {
  return (

    <div class="padre">
      <div class="login">
        <div class="login-info-container">
          <Logo img={data.routes.logoH} />
          <Title text="Bienvenidos a Mood Happy" />
          <form className="inputs-container">
            <TitleH3 text="Usuario:" />
            <Input type="text" placeholder="Username" />
            <TitleH3 text="Contraseña" />
            <Input type="password" placeholder="password" />

            <div className="span">
              <Span p="¿Aun no tienes cuenta?" /> <Link to="/Register">Click</Link>
              <Span p="Terminos de servicio," />
              <Span p="Politica de privacidad," />
              <Span p="Condiciones de uso" />
            </div>
            <button class="btn">Iniciar sesion</button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default FormLogin;