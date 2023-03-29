import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import NavCites from "../molecules/NavCites";
import Psycologist from "../organism/Psycologist";

import "../../assets/styles/cites.css";
import "../../assets/styles/global.css";

function Cites() {
    return ( 
        <body>
            <header>
                <Header title='AGENDA TU CITA' text="En Tuxtla Gutierrez te estamos esperando para escucharte" 
                        text2=" hablar y comprender tu situacion" />
            </header>
            <nav className="div-center-elements">
                <NavCites />
            </nav>
            <main>
                <Psycologist />
            </main>

            <footer>
                <Footer />
            </footer>

            <script></script>
        </body>
     );
}

export default Cites;