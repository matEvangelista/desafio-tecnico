# Como os arquivos estão organizados e quais são suas funções?

## 1 - Esclarecendo components

Os components estão organizados desta forma:

<ul>
    <li>Navbar</li>
    <li>Header</li>
    <li>Main</li>
    <ul>
        <li>SectionsContainer</li>
        <ul><li>Section</li></ul>
        <li>SuggestionsContainer</li>
        <ul><li>Suggestion</li></ul>
        <li>Mural</li>
        <ul><li>CardContainer</li></ul>
        <ul><ul><li>Card</li></ul></ul>
        <li>Contact</li>
    </ul>
    <li>Footer</li>
</ul>

O component `Header` contem a imagem de uma kombi, uma pergunta e um formulário para pesquisar o destino.

`Section` corresponde a cada grupo de seções com uma imagem e um texto em que se lê "viagem nacional". `SectionsContainer` foi criado para organizar as seções, que receberam os textos e as imagens por props. Contei com o auxílio da biblioteca <a href="https://www.npmjs.com/package/react-markdown">`react-markdown`</a> para transformar um trecho entre dois pares de astericos em uma tag `strong` do HTML, que foi estilizada no SASS.

`Suggestion` é um card com uma imagem e um link por cima, no qual há o efeito blur. `SuggestionsContainer` funciona como o container descrito acima.

`Mural` contém o mural com as fotos e os cards ao antes da seção de contato.

`Contact` é a seção de contatos e `Footer`, o footer.

## 2 - Organização do SASS
### 2.1 Variables
O arquivo `_variables.scss` contém as variáveis utilizadas ao longo do projeto, como tipos de fonte, cores, espaçamento de letras, gradiente e border-radius padrões.

### 2.2 Mixins
O arquivo `_mixins.scss` contém a class `container`, que organiza os elementos no centro e cuja largura depende de cada breakpoint de largura de tela.

O mixin `btn` armazena atributos de estilo padrões para os botões e links da página, que quase sempre são iguais. Podem ser personalizados pela `$bg-color`, `$text-color`, `$border` (booleano) e `$border-color`.

Seguindo a mesma linha de raciocínio que explica a existência do mixin btn, há o `basic-input`, que pode ser personalizado com a largura do input de texto, `$width`

Por fim, há o mixin `flex-center`, que é um display flex cujos elementos são alinhados no centro e que recebe `$flex-direction` como parâmetro, que, por padrão, é linha.

Ou outros arquivos foram organizados conforme a componentização descrita na primeira seção deste texto.
