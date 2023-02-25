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
            <header>
                <Header />
            </header>

            <body>
                <RowInfo />
                <div className="div-left-elements">
                    <div >
                        <Img image={data.imgs.plusPromotion} />
                    </div>
                </div>
                <RowServices/>
                <div className="div-right-elements">
                    <div >
                        <Img image={data.imgs.psicology} />
                    </div>
                </div>
            </body>

            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Home;