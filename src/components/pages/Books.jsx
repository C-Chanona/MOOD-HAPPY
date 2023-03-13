import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import RowBooks from "../organism/RowBooks";


function Books() {
    return (
        <body>
            <body>
                <header>
                    <Header title='LIBROS' text="Encuentra decenas de libros que te acompañaran"  />
                </header>
                <main>
                    <RowBooks />
                </main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </body>
    );
}

export default Books;