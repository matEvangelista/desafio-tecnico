// há apenas dois tipos de sections: as que possuem foto à direita e texto à esquerda e o contrário disso.
// é passado por props a variável textLeft, que representa a segunda situação

// o que esta biblioteca faz? Cria tags html a partir de notação de markdown
// por exemplo: **oi** -> <strong>oi</strong>
// palavras em específico passam assim pelas props
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Section({
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
        <figure
            className={"img-text " + (textLeft ? "text-left" : "text-right")}
        >
            <img src={img} alt={alt} />
            <figcaption>
                <div>
                    <div className="line"></div>
                    <p className="viagens-nacionais">Viagens nacionais</p>
                </div>
                <h2>{h2}</h2>
                <ReactMarkdown>{text}</ReactMarkdown>
                <a href="#">Agendar</a>
            </figcaption>
        </figure>
    );
}
