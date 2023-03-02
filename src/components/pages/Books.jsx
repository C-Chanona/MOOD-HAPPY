import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import RowCardsBooks from "../organism/RowCardsBooks";

function Books() {
    return (
        <body>
            <body>
                <header>
                    <Header />
                </header>
                <main>
                    <RowCardsBooks></RowCardsBooks>
                </main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </body>
    );
}

export default Books;