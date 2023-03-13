import { Link } from 'react-router-dom';
import Title from '../atoms/Title';
import Span from '../atoms/Span';
import Icon from '../atoms/Icon';
import { data } from "../../data/data";
import "../../assets/styles/global.css"


function RowInfo() {
    return ( 
        <div className='columns-3'>
            <div className='div-center-elements'>
                <Icon icon={data.routes.cloud} />
                <Title text="¿Qué es Mood-Happy" />
                <Span p="Mood happy es una aplicación de autoayuda gratuita para las personas con problemas de ansiedad, estres, 
                        depresion entre muchos otros conflictos emocionales que se pueden llegar a tener. " />
            </div>
            <div className='div-center-elements'>
                <Icon icon={data.routes.IdeaAdjust} />
                <Title text="¿Comó funciona?" />
                <Span p="Mood Happy permite a lo usuarios consultar respuestas a emociones perjudiciales mediante terapias gratuitas 
                        o dinamicas de apoyo, a su vez Mood Happy te ofrece 
                        una lista de psicologos que estan dispuestos a escucharte en cuanto lo requieras, esto
                        conforme a la prioridad de la cita que solicitaste." />
            </div>
            <div className='div-center-elements'>
                <Icon icon={data.routes.Plus} />
                <Title text="Nuestro plan premium" />
                <Span p="El plan premium ofrece a todos los usuarios que cuenten con una suscripcion, 
                        el privilegio de tener acceso al catalogo de audiolibros." />
                <Link to="/Premium">Clic aqui</Link>
            </div>
        </div>
     );
}

export default RowInfo;
