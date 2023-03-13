import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import RowServices from "../organism/RowService";
import RowInfo from "../organism/RowInfo";
import Img from "../atoms/Img";

import { data } from "../../data/data"
import "../../assets/styles/global.css"

function Home() {
    return (
        <>
            <body>
                <header>
                    <Header title='Bienvenido a MOOD-HAPPY' text="Servicio especializado en psicoterapias online y presencial." 
                            text2="Apoyo emocional de forma dinamica." text3="Mini curso de tareas para el mejoramiento de mi persona" />
                </header>
                <main>
                    <RowInfo />
                    <RowServices />
                    <div className="div-right-elements">
                        <div >
                            <Img image={data.imgs.psicology} />
                        </div>
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </>
    );
}

export default Home;