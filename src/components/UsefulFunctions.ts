// esta extrai o nome da imagem a partir de seu endereço. Por exemplo: /src/assets/rio-de-janeiro$.png -> rio de janeiro
// assume, é claro, que a entrada vai estar escrita-desta-forma
export function name(path: string) {
    return path
        .slice(path.lastIndexOf("/") + 1, path.indexOf("$"))
        .replaceAll("-", " ");
    /*
    Por que não apenas até o "." antes da extensão?
    O github altera o nome dos arquivos, sempre inserindo um número em hexadecimal.
    Como não posso simplesmente eliminar qualquer letra entre A e F, resolvi colocar um $ nos arquivos para facilitar
    a geração de títulos e alts com o .map()
    Esta forma é mais rápida do que importar imagens, textos e alts um por um
     */
}
