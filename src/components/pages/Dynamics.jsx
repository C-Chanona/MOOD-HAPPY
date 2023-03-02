import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import RowCards from "../organism/RowCards";


function Dynamics() {
    return (
        <>
            <body>
                <header>
                    <Header />
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