// há apenas dois tipos de sections: as que possuem foto à direita e texto à esquerda e o contrário disso.
// é passado por props a variável textLeft, que representa a segunda situação e será utilizada como condição no SASS
export default function ({
    textLeft,
    img,
    alt,
    h2,
    text,
}: {
    textLeft: boolean;
    img: string;
    alt: string;
    h2: string;
    text: string;
}) {
    return (
        <figure className={"img-text " + (textLeft ? "text-left" : "text-right")}>
            <img src={img} alt={alt} />
            <figcaption>
                <p><div></div>Viagens nacionais</p>
                <h2>{h2}</h2>
                <p>{text}</p>
                <a href="">Agendar</a>
            </figcaption>
        </figure>
    );
}
