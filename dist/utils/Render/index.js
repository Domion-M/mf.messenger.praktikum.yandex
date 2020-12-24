export function render(query, block) {
    const root = document.querySelector(query);
    if (root) {
        root.appendChild(block.content());
        if (block.getComponent) {
            block.getComponent();
        }
        return root;
    }
    return null;
}
;
//# sourceMappingURL=index.js.map