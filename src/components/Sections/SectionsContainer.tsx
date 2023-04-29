import Section from "./Section";
import casal from "../../assets/casal.png";
import amigos from "../../assets/amigos.png";
import amigosPiscina from "../../assets/amigos-piscina.png"

export default function SectionsContainer() {
    return (
        <>
            <Section
                img={casal}
                alt={casal}
                h2="O clima perfeito, no lugar perfeito"
                text="Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço."
                textLeft={false}
            />
            <Section
                img={amigos}
                alt={amigos}
                h2="Curta uma nova vibe entre amigos"
                text="Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos Planos Multi."
                textLeft={true}
            />
            <Section
                img={amigosPiscina}
                alt={amigosPiscina}
                h2="Algumas experiências são inexplicáveis"
                text="Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes, num clima sereno, relaxante e natural."
                textLeft={false}
            />
        </>
    );
}
