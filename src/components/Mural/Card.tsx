import { name } from "../UsefulFunctions";

export default function ({
    img,
    alt,
    gray,
}: {
    img: string;
    alt: string;
    gray: boolean;
}) {
    return (
        <figure className={"card " + (gray ? "gray" : "blue")}>
            <img src={img} alt={name(alt)} />
            <p>{name(alt).charAt(0).toUpperCase() + name(alt).slice(1)}</p>
        </figure>
    );
}
