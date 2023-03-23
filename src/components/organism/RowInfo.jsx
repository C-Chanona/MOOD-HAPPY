import { Link,useNavigate } from 'react-router-dom';
import Title from '../atoms/Title';
import Span from '../atoms/Span';
import Icon from '../atoms/Icon';
import { data } from "../../data/data";
import "../../assets/styles/global.css"


function RowInfo() {

    const navigate = useNavigate();

    const handlerClickKnow = (e) => {
        e.preventDefault();
        navigate("/AboutWe");
    }

    const handlerClickMoreSee = (e) => {
        e.preventDefault();
        navigate("/AboutWe/function");
    }

    const handlerClickSuscription= (e) => {
        e.preventDefault();
        navigate("/Premium");
    }

    return (
        <div className='columns-3'>
            <div className='div-center-elements'>
                <Icon icon={data.routes.cloud} />
                <Title text="¿Qué es Mood-Happy?" color="black" />
                <Span p="Mood happy es una aplicación de autoayuda gratuita para las personas con problemas de ansiedad, estres, 
                        depresion entre muchos otros conflictos emocionales que se pueden llegar a tener. " />
                <button className='buttoncard' onClick={handlerClickKnow}>Conocer mas</button>
            </div>
            <div className='div-center-elements'>
                <Icon icon={data.routes.IdeaAdjust} />
                <Title text="¿Comó funciona?" color="black" />
                <Span p="Mood Happy permite a lo usuarios consultar respuestas a emociones perjudiciales mediante terapias gratuitas 
                        o dinamicas de apoyo, a su vez Mood Happy te ofrece 
                        una lista de psicologos que estan dispuestos a escucharte en cuanto lo requieras" />
                <button className='buttoncard' onClick={handlerClickMoreSee}>Ver mas</button>
            </div>
            <div className='div-center-elements'>
                <Icon icon={data.routes.Plus} />
                <Title text="Nuestro plan premium" color="black" />
                <Span p="El plan premium ofrece a todos los usuarios que cuenten con una suscripcion, 
                        el privilegio de tener acceso al catalogo de audiolibros." />
                <button className='buttoncard' onClick={handlerClickSuscription}>Suscribirme</button>
            </div>
        </div>
    );
}

export default RowInfo;
