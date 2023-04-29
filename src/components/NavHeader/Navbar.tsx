import logo from "../../assets/logo.png";
import { useRef } from "react"; // prefiro não usar query selector

export default function Navbar() {
    // "container" serve para centralizar e determinar a largura conforme o tamanho da tela. Mais detalhes em App.scss e readme

    const ulActive = useRef<HTMLUListElement>(null);
    const btnActive = useRef<HTMLButtonElement>(null);

    function handleClick() {
        ulActive.current?.classList.toggle("clicked");
        btnActive.current?.classList.toggle("active");
    }

    return (
        <nav>
            <div className="container">
                <section>
                    <a href="">
                        <img src={logo} alt="Logo güdi" />
                    </a>
                    <button ref={btnActive} onClick={handleClick}>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                    </button>
                </section>
                <ul ref={ulActive}>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Benefícios</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                    <li>
                        <a href="#" id="agendar">
                            Agendar
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
