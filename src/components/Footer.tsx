import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer className="container">
            <ul>
                <li>
                    <img src={logo} alt="logo" />
                </li>
                <li>
                    <a>Sobre nós</a>
                </li>
                <li>
                    <a>Mural de memórias</a>
                </li>
                <li>
                    <a>Eventos gudi</a>
                </li>
                <li>
                    <a>Nosso blog</a>
                </li>
            </ul>
            <ul>
                <li>Contato</li>
                <li>
                    <a>Char virtual</a>
                </li>
                <li>
                    <a>SAC Online</a>
                </li>
                <li>
                    <a>Ouvidoria</a>
                </li>
                <li>
                    <a>FAQ</a>
                </li>
            </ul>
            <ul>
                <li>Benefícios</li>
                <li>
                    <a>Conta digital Gudi</a>
                </li>
                <li>
                    <a>Viaje com Milhas</a>
                </li>
                <li>
                    <a>C6 Átomos</a>
                </li>
                <li>
                    <a>ID Jovem</a>
                </li>
            </ul>
            <ul>
                <li>Lugares</li>
                <li>
                    <a>O melhor do Brasil</a>
                </li>
                <li>
                    <a>Pontos turísticos</a>
                </li>
                <li>
                    <a>Cidades frequentes</a>
                </li>
                <li>
                    <a>Restaurantes</a>
                </li>
            </ul>
            <ul>
                <li>Curiosidades</li>
                <li>
                    <a>Cultura e tradições</a>
                </li>
                <li>
                    <a>Pratos típicos</a>
                </li>
                <li>
                    <a>Mitos brasileiros</a>
                </li>
                <li>
                    <a>Carnaval</a>
                </li>
            </ul>
        </footer>
    );
}
