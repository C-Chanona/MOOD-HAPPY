import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import BodyLanding from "../organism/BodyLanding";

import "../../assets/styles/global.css"

function Home() {
    return ( 
        <>
            <header>
                <Header/>
            </header>

            <body>
                <BodyLanding />
            </body>

            <footer>
                <Footer/>
            </footer>
        </>
     );
}

export default Home;