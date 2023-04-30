
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
            <img src={img} alt={alt} />
            <p>{alt}</p>
        </figure>
    );
}
