import Suggestion from "./Suggestion";
import rio from "../../assets/rio-de-janeiro$.png";
import ostras from "../../assets/rio-das-ostras$.png";
import caldas from "../../assets/caldas-novas$.png";
import amazonia from "../../assets/amazônia$.png";

import { name } from "../UsefulFunctions";

export default function SuggestionsContainer() {
    const array = [rio, ostras, caldas, amazonia];
    return (
        <section className="suggestions-container">
            {array.map((x) => (
                <Suggestion img={x} alt={x} key={name(x)}/>
            ))}
        </section>
    );
}
