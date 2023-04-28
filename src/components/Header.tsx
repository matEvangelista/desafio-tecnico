export default function Header() {
    return (
    <header>
        <section className="container">
            <div className="destino">
                <h2>Para qual estado você deseja ir?</h2>
                <form>
                    <input type="text" name="destino-input" id="destino-input" placeholder="Pesquisar" />
                    <button type="submit">Buscar</button>
                </form>
            </div>
        </section>
    </header>);
}
