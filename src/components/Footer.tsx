import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer className="container">
            <ul>
                <li><img src={logo} alt="logo" /></li>
                <li>Sobre nós</li>
                <li>Mural de memórias</li>
                <li>Eventos gudi</li>
                <li>Nosso blog</li>
            </ul>
            <ul>
                <li>Contato</li>
                <li>Char virtual</li>
                <li>SAC Online</li>
                <li>Ouvidoria</li>
                <li>FAQ</li>
            </ul>
            <ul>
                <li>Benefícios</li>
                <li>Conta digital Gudi</li>
                <li>Viaje com Milhas</li>
                <li>C6 Átomos</li>
                <li>ID Jovem</li>
            </ul>
            <ul>
                <li>Lugares</li>
                <li>O melhor do Brasil</li>
                <li>Pontos turísticos</li>
                <li>Cidades frequentes</li>
                <li>Restaurantes</li>
            </ul>
            <ul>
                <li>Curiosidades</li>
                <li>Cultura e tradições</li>
                <li>Pratos típicos</li>
                <li>Mitos brasileiros</li>
                <li>Carnaval</li>
            </ul>
        </footer>
    );
}
