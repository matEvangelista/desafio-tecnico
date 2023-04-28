import logo from "../assets/logo.png";

export default function Navbar() {
    // "container" serve para centralizar e determinar a largura conforme o tamanho da tela. Mais detalhes em App.scss.
    return (
        <nav>
            <div className="container">
                <a href="">
                    <img src={logo} alt="Logo güdi" />
                </a>
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Benefícios</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#" id="agendar">Agendar</a></li>
                </ul>
            </div>
        </nav>
    );
}
