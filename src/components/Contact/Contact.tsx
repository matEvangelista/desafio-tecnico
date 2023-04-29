export default function Contact() {
    return (
        <div className="contact">
            <h2>Fale conosco</h2>
            <form className="container">
                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" placeholder="Digite o seu melhor e-mail"/>
                <label htmlFor="subject"></label>
                <input type="text" name="subject" id="subject" placeholder="Assunto" />
                <label htmlFor="message"></label>
                <textarea name="message" id="message" placeholder="Escreva sua mensagem"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
