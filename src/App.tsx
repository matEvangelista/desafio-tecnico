import "./styles/Reset.scss";
import "./styles/App.scss";
import Navbar from "./components/NavHeader/Navbar";
import Header from "./components/NavHeader/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Main/>
            <Footer/>
        </>
    );
}

export default App;
