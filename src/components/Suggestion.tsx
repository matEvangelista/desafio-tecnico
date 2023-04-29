import { name } from "./UsefulFunctions";

export default function Suggestion({ img, alt }: { img: string; alt: string }) {
    return (
        <figure className="suggestion">
            <img src={img} alt={alt} />
            <a>{name(alt)}</a>
        </figure>
    );
}
