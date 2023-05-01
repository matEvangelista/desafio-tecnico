import Contact from "./Contact/Contact";
import Mural from "./Mural/Mural";
import SectionsContainer from "./Sections/SectionsContainer";
import SuggestionsContainer from "./Suggestions/SuggestionsContainer";

export default function Main() {
    return(<main>
        <SectionsContainer/>
        <SuggestionsContainer/>
        <Mural/>
        <Contact/>
    </main>)
}