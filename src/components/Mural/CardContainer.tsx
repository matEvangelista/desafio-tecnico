import Card from "./Card";
import img1 from "../../assets/o-melhor-do-brasil.svg";
import img2 from "../../assets/cidades-mais-frequentadas.svg";
import img3 from "../../assets/pontos-turísticos.svg";
import img4 from "../../assets/Restaurantes.svg";

export default function CardContainer() {
    const imgs:string[] = [img1, img2, img3, img4];
    return(
        <section className="card-container">
            {imgs.map((el, i) => <Card img={el} alt={el} gray={i % 2 == 0}/>)}
        </section>
    )
}