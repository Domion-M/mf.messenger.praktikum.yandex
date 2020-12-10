
export function render(query: string, block: any): Element {
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
    return root;
}