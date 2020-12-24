
export function render(query: string, block: any): Element | null {
    const root: HTMLElement | null = document.querySelector(query);
    if (root) {
        root.appendChild(block.content());
        if (block.getComponent) {
            block.getComponent()
        }
        return root;
    }
    return null;
};
