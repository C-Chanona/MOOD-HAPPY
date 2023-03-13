import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import RowCards from "../organism/RowCards";


function Dynamics() {
    return (
        <>
            <body>
                <header>
                    <Header title='¿MOMENTOS COMPLICADOS?' text="No te preocupes te apoyaremos guiandote con los" 
                            text2="siguientes tips que serviran para soltar esas emociones" />
                </header>
                <main>
                    <RowCards />
                    
                </main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </>
    );
}

export default Dynamics;