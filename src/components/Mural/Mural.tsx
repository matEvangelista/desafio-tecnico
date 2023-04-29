import foto1 from "../../assets/amigas.png";
import foto2 from "../../assets/amigos-pulando.png";
import foto3 from "../../assets/homem-bebê.png";
import foto4 from "../../assets/homem-cachorro.png";
import foto5 from "../../assets/bicicleta.png";
import foto6 from "../../assets/selfie.png";

import { name } from "../UsefulFunctions";
import CardContainer from "./CardContainer";

export default function Mural() {
    const array = [foto1, foto2, foto3, foto4, foto5, foto6];
    return (
        <section className="mural container">
            <p>use a hashtag #brasilisverygudi</p>
            <h2>Nosso mural de Experiências</h2>
            <figure className="images-grid images-container">
                {array.map((x) => (
                    <img src={x} alt={name(x)} />
                ))}
            </figure>
            <CardContainer/>
        </section>
    );
}
