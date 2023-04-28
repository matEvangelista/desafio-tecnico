import "./styles/App.scss";
import "./styles/Reset.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Main/>
        </>
    );
}

export default App;
