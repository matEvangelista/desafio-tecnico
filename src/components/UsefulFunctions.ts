// esta extrai o nome da imagem a partir de seu endereço. Por exemplo: /src/assets/rio-de-janeiro.png -> rio de janeiro
// assume, é claro, que a entrada vai estar escrita-desta-forma
export function name(path: string) {
    return path
        .slice(path.lastIndexOf("/") + 1, path.lastIndexOf("."))
        .replaceAll("-", " ");
}
