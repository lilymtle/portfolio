export function capitalizeFirstLetter(word: string | undefined) {
    return word ? word.charAt(0).toUpperCase() + word.slice(1) : "";
};