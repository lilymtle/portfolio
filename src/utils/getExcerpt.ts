export const getExcerpt = (body: any[], length = 50) => {
    if (!body || body.length === 0) return "";

    const firstBlock = body[0];
    if (firstBlock.children && firstBlock.children.length > 0) {
        return firstBlock.children[0].text.slice(0, length) + "...";
    };

    return "";
};