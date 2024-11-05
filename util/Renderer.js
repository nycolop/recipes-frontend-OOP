
export default class Renderer {
    static renderToHTML(targetElement, html) {
        document.querySelector(targetElement).innerHTML = html;
    }
}
