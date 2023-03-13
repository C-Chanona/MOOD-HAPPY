import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import Courses from "../organism/Courses";

function Activities() {
    return ( 
        <body>
            <header>
                <Header title='CURSOS' text='Desarrolla tu gestion emocional y crece en profundidad'text2="con tus emociones" />
            </header>

            <main>
                <Courses />
            </main>

            <footer>
                <Footer />
            </footer>
        </body>
     );
}

export default Activities;