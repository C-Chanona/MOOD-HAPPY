import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import RowCards from "../organism/RowCards";

function Books() {
    return (
        <body>
            <body>
                <header>
                    <Header />
                </header>
                <main>
                    <RowCards />
                    <RowCards />
                </main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </body>
    );
}

export default Books;